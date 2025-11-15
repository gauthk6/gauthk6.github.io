# Google Analytics 4 Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Create a GA4 Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Admin" (gear icon in bottom left)
3. Create a new account or use existing one
4. Create a new property:
   - Property name: "Gautham Kishore Portfolio" (or your preference)
   - Time zone: Select your time zone
   - Currency: Select your currency

### Step 2: Create a Data Stream
1. After creating property, you'll be prompted to set up a data stream
2. Click "Web"
3. Enter your website details:
   - Website URL: `https://gauthk6.github.io` (or your custom domain)
   - Stream name: "Portfolio Website"
4. Click "Create stream"

### Step 3: Get Your Measurement ID
1. After creating the stream, you'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. Copy this ID

### Step 4: Add Measurement ID to Your Website
1. Open `index.html` in your repository
2. Find these two lines (around line 31 and 36):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
   and
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID in **both places**
4. Save, commit, and push your changes

### Step 5: Verify It's Working
1. After deploying your changes, visit your website
2. Go back to Google Analytics
3. Click on "Reports" → "Realtime"
4. You should see yourself as an active user within 30 seconds

## What You'll See in GA4

Once set up, you'll have access to:

### Real-time Reports
- Active users on your site right now
- What pages they're viewing
- Where they're coming from

### Audience Reports
- Total visitors (daily, weekly, monthly)
- New vs returning visitors
- Geographic location
- Device type (mobile, desktop, tablet)
- Browser and operating system

### Acquisition Reports
- Traffic sources (direct, social, search, referral)
- Which links are bringing people to your site
- Search terms (if from Google)

### Engagement Reports
- Most popular pages
- How long people stay on each page
- Scroll depth
- Click tracking

### Key Metrics Available
- **Users**: Unique visitors to your site
- **Sessions**: Number of visits
- **Pageviews**: Total pages viewed
- **Bounce Rate**: Visitors who leave after one page
- **Session Duration**: How long visitors stay
- **Pages per Session**: Average pages viewed per visit

## Privacy & Best Practices

1. **Cookie Consent**: Consider adding a cookie consent banner if you have EU visitors (GDPR compliance)
2. **Privacy Policy**: Update your privacy policy to mention Google Analytics
3. **IP Anonymization**: GA4 anonymizes IPs by default
4. **Data Retention**: You can configure how long GA4 keeps user data (Admin → Data Settings → Data Retention)

## Advanced Features (Optional)

Once you're comfortable with basic analytics, you can explore:
- **Custom Events**: Track specific interactions (button clicks, form submissions)
- **Conversions**: Define what counts as a "goal" (e.g., clicking your email link)
- **Enhanced Measurement**: Automatically track scrolls, outbound clicks, site search, video engagement
- **Audience Segments**: Create custom user groups for analysis
- **Integration with Google Search Console**: See your SEO performance

## Troubleshooting

**Not seeing data?**
- Make sure you replaced `G-XXXXXXXXXX` with your actual Measurement ID
- Check that changes are deployed to your live site
- Verify the script is loading (check browser console for errors)
- Wait 24-48 hours for historical data to populate

**Still having issues?**
- Use the [GA4 Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger)
- Check GA4's "DebugView" in Reports → Realtime → DebugView

## Useful Resources
- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Checklist](https://support.google.com/analytics/answer/9304153)
- [GA4 vs Universal Analytics](https://support.google.com/analytics/answer/11583528)
