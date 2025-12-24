# HubSpot CRM Integration Guide

This guide explains how to integrate your GrowthPilot AI website forms with HubSpot CRM using Formspree webhooks to automatically sync form submissions.

## Overview

All forms on your website (Contact, Resources Downloads, Book Strategy Call) submit to Formspree (https://formspree.io/f/xeonappo). Formspree can forward these submissions to HubSpot via webhooks, creating contacts and deals automatically.

## Prerequisites

1. **HubSpot Account** with API access (Professional or Enterprise plan recommended)
2. **Formspree Account** with webhook feature (Gold plan or higher)
3. **HubSpot API Key** or Private App Access Token

## Step 1: Create HubSpot Private App

1. Log into your HubSpot account
2. Navigate to **Settings** → **Integrations** → **Private Apps**
3. Click **Create a private app**
4. Name it "GrowthPilot Website Forms"
5. Under **Scopes**, enable:
   - `crm.objects.contacts.write` (Create and update contacts)
   - `crm.objects.contacts.read` (Read contact information)
   - `crm.objects.deals.write` (Create deals)
   - `crm.objects.companies.write` (Create companies)
6. Click **Create app** and copy the **Access Token** (starts with `pat-na1-...`)
7. Store this token securely - you'll need it for webhook configuration

## Step 2: Configure Formspree Webhook

1. Log into your Formspree dashboard at https://formspree.io
2. Navigate to your form: **xeonappo** (GrowthPilot AI Forms)
3. Go to **Settings** → **Webhooks**
4. Click **Add Webhook**
5. Configure the webhook:

### Webhook URL
```
https://api.hubapi.com/crm/v3/objects/contacts
```

### Headers
Add these headers:
```
Authorization: Bearer YOUR_HUBSPOT_ACCESS_TOKEN
Content-Type: application/json
```
Replace `YOUR_HUBSPOT_ACCESS_TOKEN` with the token from Step 1.

### Payload Template (JSON)
```json
{
  "properties": {
    "email": "{{email}}",
    "firstname": "{{fullName}}",
    "phone": "{{phone}}",
    "company": "{{company}}",
    "message": "{{message}}",
    "hs_lead_status": "NEW",
    "lifecyclestage": "lead",
    "form_type": "{{formType}}"
  }
}
```

6. Click **Save Webhook**

## Step 3: Create HubSpot Workflow for Deal Creation

To automatically create deals when strategy call requests come in:

1. In HubSpot, go to **Automation** → **Workflows**
2. Click **Create workflow** → **Contact-based**
3. Set enrollment trigger:
   - **Filter type**: Contact properties
   - **Property**: `form_type`
   - **Equals**: "Book a Strategy Call"
4. Add action: **Create deal**
5. Configure deal properties:
   - **Deal name**: `{{contact.firstname}}'s Strategy Call`
   - **Deal stage**: "Appointment Scheduled"
   - **Deal amount**: $0 (or your consultation value)
   - **Associate with contact**: Yes
6. Add action: **Send internal email notification**
   - **To**: Your sales team email
   - **Subject**: "New Strategy Call Request from {{contact.firstname}}"
7. Turn on the workflow

## Step 4: Set Up Form-Specific Routing

### For Resource Downloads
Create a separate workflow to track content engagement:

1. Create workflow with trigger: `form_type` equals "Resource Download"
2. Add action: **Set contact property**
   - Property: `hs_lead_status`
   - Value: "MQL" (Marketing Qualified Lead)
3. Add action: **Add to list**: "Content Downloaders"
4. Add action: **Send follow-up email** (nurture sequence)

### For Contact Form Submissions
Create workflow for general inquiries:

1. Create workflow with trigger: `form_type` equals "Contact Form"
2. Add action: **Create task**
   - Assigned to: Sales rep
   - Task type: "Follow up"
   - Due date: 1 business day
3. Add action: **Send notification** to sales team

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check Formspree dashboard → **Submissions** to confirm receipt
3. Check Formspree → **Webhooks** → **Delivery Log** for webhook status
4. Verify in HubSpot:
   - Go to **Contacts** and search for test email
   - Confirm contact was created with correct properties
   - Check if workflow triggered (if applicable)

## Troubleshooting

### Webhook Fails with 401 Error
- **Cause**: Invalid or expired HubSpot access token
- **Solution**: Regenerate token in HubSpot Private Apps settings

### Webhook Fails with 400 Error
- **Cause**: Invalid payload format or missing required fields
- **Solution**: Check HubSpot API documentation for required contact properties

### Contact Created but No Deal
- **Cause**: Workflow not triggered or `form_type` property not set
- **Solution**: Verify workflow enrollment criteria and check contact properties

### Duplicate Contacts
- **Cause**: HubSpot creates new contact instead of updating existing
- **Solution**: Enable "Deduplicate contacts" in HubSpot settings (Settings → Objects → Contacts)

## Advanced Configuration

### Map Form Fields to Custom HubSpot Properties

If you have custom properties in HubSpot:

1. In HubSpot, go to **Settings** → **Properties**
2. Note the **Internal name** of custom properties
3. Update Formspree webhook payload:

```json
{
  "properties": {
    "email": "{{email}}",
    "firstname": "{{fullName}}",
    "phone": "{{phone}}",
    "company": "{{company}}",
    "your_custom_property": "{{customFieldValue}}"
  }
}
```

### Add UTM Tracking

To track marketing campaign performance:

1. Add hidden fields to your forms for UTM parameters
2. Update webhook payload:

```json
{
  "properties": {
    "email": "{{email}}",
    "hs_analytics_source": "{{utm_source}}",
    "hs_analytics_source_data_1": "{{utm_medium}}",
    "hs_analytics_source_data_2": "{{utm_campaign}}"
  }
}
```

### Create Company Records Automatically

To create company records from form submissions:

1. Create second webhook in Formspree pointing to:
```
https://api.hubapi.com/crm/v3/objects/companies
```

2. Use payload:
```json
{
  "properties": {
    "name": "{{company}}",
    "domain": "{{companyDomain}}"
  }
}
```

3. Create HubSpot workflow to associate contact with company

## Data Flow Diagram

```
Website Form Submission
        ↓
Formspree (https://formspree.io/f/xeonappo)
        ↓
Webhook triggers
        ↓
HubSpot API (Create/Update Contact)
        ↓
HubSpot Workflow triggers
        ↓
Actions: Create Deal, Send Notifications, Add to Lists
```

## Security Best Practices

1. **Never expose API tokens** in client-side code
2. **Use Private Apps** instead of API keys (more granular permissions)
3. **Rotate tokens regularly** (every 90 days recommended)
4. **Monitor webhook logs** for suspicious activity
5. **Enable IP allowlisting** in HubSpot if possible

## Support Resources

- **Formspree Documentation**: https://help.formspree.io/hc/en-us/articles/360055613373-Webhooks
- **HubSpot API Documentation**: https://developers.hubspot.com/docs/api/crm/contacts
- **HubSpot Workflows Guide**: https://knowledge.hubspot.com/workflows/create-workflows

## Maintenance

### Monthly Tasks
- Review webhook delivery success rate in Formspree
- Check HubSpot contact creation rate
- Verify workflows are triggering correctly

### Quarterly Tasks
- Audit HubSpot contact properties for data quality
- Review and optimize workflow actions
- Update webhook payload if new form fields added

---

**Last Updated**: January 2025
**Integration Version**: 1.0
**Maintained by**: GrowthPilot AI Technical Team
