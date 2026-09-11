export const PLATFORM_OPTIONS = {
  "web": {
    "label": "Web / React",
    "factor": 1.0
  },
  "backend": {
    "label": "Backend / Node.js",
    "factor": 1.0
  },
  "mobile": {
    "label": "Mobile / React Native",
    "factor": 0.95
  },
  "ios": {
    "label": "Native iOS / Swift",
    "factor": 1.0
  },
  "android": {
    "label": "Native Android / Kotlin",
    "factor": 1.0
  },
  "flutter": {
    "label": "Flutter",
    "factor": 0.95
  },
  "ux": {
    "label": "UI/UX",
    "factor": 1.0
  },
  "qa": {
    "label": "QA",
    "factor": 0.45
  },
  "devops": {
    "label": "DevOps",
    "factor": 0.35
  }
};
export const MODULES = [
  {
    "id": "m1",
    "category": "Authentication & Identity",
    "name": "Basic Username + Password Login",
    "screen": "Login",
    "complexity": "Basic",
    "baseHours": 8,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Username/email entry",
      "Password entry",
      "Show/hide password",
      "Login validation",
      "Invalid login handling",
      "Session creation"
    ],
    "description": "Create, view and manage basic username + password login with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m2",
    "category": "Authentication & Identity",
    "name": "Forgot Password",
    "screen": "Login / Recovery",
    "complexity": "Basic",
    "baseHours": 8,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Email entry",
      "Reset link",
      "Token expiry",
      "New password",
      "Confirmation"
    ],
    "description": "Create, view and manage forgot password with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m3",
    "category": "Authentication & Identity",
    "name": "Email Verification",
    "screen": "Registration",
    "complexity": "Basic",
    "baseHours": 8,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Verification email",
      "Token validation",
      "Resend verification",
      "Verified status"
    ],
    "description": "Create, view and manage email verification with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m4",
    "category": "Authentication & Identity",
    "name": "Registration - Email",
    "screen": "Registration",
    "complexity": "Basic",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Registration form",
      "Field validation",
      "Account creation",
      "Welcome email"
    ],
    "description": "Create, view and manage registration - email with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m5",
    "category": "Authentication & Identity",
    "name": "Registration - Mobile OTP",
    "screen": "Registration",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Mobile number",
      "OTP send",
      "OTP verify",
      "Resend OTP",
      "Verification status"
    ],
    "description": "Create, view and manage registration - mobile otp with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m6",
    "category": "Authentication & Identity",
    "name": "Google Sign-In",
    "screen": "Login / SSO",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "OAuth redirect",
      "Callback",
      "Account mapping",
      "Existing account handling"
    ],
    "description": "Create, view and manage google sign-in with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m7",
    "category": "Authentication & Identity",
    "name": "Facebook Sign-In",
    "screen": "Login / SSO",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "OAuth redirect",
      "Callback",
      "Account mapping",
      "Existing account handling"
    ],
    "description": "Create, view and manage facebook sign-in with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m8",
    "category": "Authentication & Identity",
    "name": "Instagram Sign-In",
    "screen": "Login / SSO",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "OAuth flow",
      "Callback",
      "Account mapping"
    ],
    "description": "Create, view and manage instagram sign-in with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m9",
    "category": "Authentication & Identity",
    "name": "LinkedIn Sign-In",
    "screen": "Login / SSO",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "OAuth flow",
      "Callback",
      "Account mapping"
    ],
    "description": "Create, view and manage linkedin sign-in with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m10",
    "category": "Authentication & Identity",
    "name": "Microsoft / Entra SSO",
    "screen": "Login / Enterprise SSO",
    "complexity": "Advanced",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Enterprise identity",
      "Tenant/configuration",
      "OAuth/OIDC",
      "Account mapping",
      "Role mapping"
    ],
    "description": "Create, view and manage microsoft / entra sso with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m11",
    "category": "Authentication & Identity",
    "name": "Apple Sign-In",
    "screen": "Login / SSO",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Apple OAuth",
      "Callback",
      "Account mapping"
    ],
    "description": "Create, view and manage apple sign-in with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m12",
    "category": "Authentication & Identity",
    "name": "Enterprise SSO - SAML",
    "screen": "Login / Enterprise SSO",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "SAML metadata",
      "Identity mapping",
      "Role/attribute mapping",
      "Single logout"
    ],
    "description": "Create, view and manage enterprise sso - saml with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m13",
    "category": "Authentication & Identity",
    "name": "Two-Factor Authentication",
    "screen": "Security",
    "complexity": "Advanced",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "OTP/app method",
      "Challenge screen",
      "Recovery codes",
      "Trusted device"
    ],
    "description": "Create, view and manage two-factor authentication with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m14",
    "category": "Authentication & Identity",
    "name": "Password Policy",
    "screen": "Security",
    "complexity": "Medium",
    "baseHours": 8,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Minimum length",
      "Complexity rules",
      "Expiry",
      "Reuse restriction"
    ],
    "description": "Create, view and manage password policy with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m15",
    "category": "Authentication & Identity",
    "name": "Session & Device Management",
    "screen": "Security",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Active sessions",
      "Device list",
      "Remote logout",
      "Session expiry"
    ],
    "description": "Create, view and manage session & device management with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m16",
    "category": "Authentication & Identity",
    "name": "Account Activation / Deactivation",
    "screen": "User Access",
    "complexity": "Basic",
    "baseHours": 6,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Status",
      "Activation email",
      "Deactivate confirmation"
    ],
    "description": "Create, view and manage account activation / deactivation with the related validation, workflow and status handling.",
    "tags": [
      "authentication & identity"
    ]
  },
  {
    "id": "m17",
    "category": "Administration & Access",
    "name": "Dashboard - Basic",
    "screen": "Dashboard",
    "complexity": "Basic",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "KPI cards",
      "Quick actions",
      "Recent activity",
      "Role-based visibility"
    ],
    "description": "Create, view and manage dashboard - basic with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m18",
    "category": "Administration & Access",
    "name": "Dashboard - Functional Flow",
    "screen": "Dashboard",
    "complexity": "Medium",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Multiple widgets",
      "Charts",
      "Filters",
      "Drill-down",
      "Recent activity"
    ],
    "description": "Create, view and manage dashboard - functional flow with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m19",
    "category": "Administration & Access",
    "name": "Dashboard - Executive Analytics",
    "screen": "Dashboard",
    "complexity": "Advanced",
    "baseHours": 40,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Configurable widgets",
      "KPI trends",
      "Drill-down",
      "Export",
      "Role-based dashboard"
    ],
    "description": "Create, view and manage dashboard - executive analytics with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m20",
    "category": "Administration & Access",
    "name": "Role Management",
    "screen": "Access Control",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Role list",
      "Create/edit role",
      "Duplicate role",
      "Activate/deactivate",
      "Role detail"
    ],
    "description": "Create, view and manage role management with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m21",
    "category": "Administration & Access",
    "name": "Permission Management",
    "screen": "Access Control",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Module permissions",
      "View/create/edit/delete",
      "Configuration permission",
      "Permission matrix"
    ],
    "description": "Create, view and manage permission management with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m22",
    "category": "Administration & Access",
    "name": "User Management - Basic",
    "screen": "User Management",
    "complexity": "Basic",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "User list",
      "Search",
      "Pagination",
      "Status",
      "View"
    ],
    "description": "Create, view and manage user management - basic with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m23",
    "category": "Administration & Access",
    "name": "User Management - CRUD",
    "screen": "User Management",
    "complexity": "Medium",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "List",
      "Filters",
      "Search",
      "Pagination",
      "View",
      "Create",
      "Edit",
      "Delete/deactivate"
    ],
    "description": "Create, view and manage user management - crud with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m24",
    "category": "Administration & Access",
    "name": "User Detail - Standard",
    "screen": "User Detail",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "Account status",
      "Roles",
      "Activity"
    ],
    "description": "Create, view and manage user detail - standard with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m25",
    "category": "Administration & Access",
    "name": "User Detail - Commerce",
    "screen": "User Detail",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "Orders",
      "Payments",
      "Subscriptions",
      "Addresses",
      "Activity"
    ],
    "description": "Create, view and manage user detail - commerce with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m26",
    "category": "Administration & Access",
    "name": "User Detail - SaaS",
    "screen": "User Detail",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "Organization",
      "Roles",
      "Usage",
      "Subscriptions",
      "Activity"
    ],
    "description": "Create, view and manage user detail - saas with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m27",
    "category": "Administration & Access",
    "name": "User Detail - Real Estate",
    "screen": "User Detail",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "KYC",
      "Saved properties",
      "Enquiries",
      "Reservations",
      "Documents"
    ],
    "description": "Create, view and manage user detail - real estate with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m28",
    "category": "Administration & Access",
    "name": "User Detail - Health",
    "screen": "User Detail",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "Appointments",
      "Documents",
      "History",
      "Payments",
      "Consent"
    ],
    "description": "Create, view and manage user detail - health with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m29",
    "category": "Administration & Access",
    "name": "User Detail - FinTech",
    "screen": "User Detail",
    "complexity": "Advanced",
    "baseHours": 36,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "KYC",
      "Accounts",
      "Transactions",
      "Limits",
      "Audit history"
    ],
    "description": "Create, view and manage user detail - fintech with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m30",
    "category": "Administration & Access",
    "name": "Bulk User Import",
    "screen": "User Management",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "CSV upload",
      "Field mapping",
      "Validation",
      "Error report",
      "Import history"
    ],
    "description": "Create, view and manage bulk user import with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m31",
    "category": "Administration & Access",
    "name": "Bulk User Actions",
    "screen": "User Management",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Multi-select",
      "Activate",
      "Deactivate",
      "Role change",
      "Export"
    ],
    "description": "Create, view and manage bulk user actions with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m32",
    "category": "Administration & Access",
    "name": "Organization Management",
    "screen": "Tenant Management",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Organization list",
      "Organization detail",
      "Users",
      "Settings",
      "Status"
    ],
    "description": "Create, view and manage organization management with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m33",
    "category": "Administration & Access",
    "name": "Multi-Tenant Management",
    "screen": "Tenant Management",
    "complexity": "Advanced",
    "baseHours": 40,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Tenant onboarding",
      "Tenant isolation",
      "Tenant settings",
      "Branding",
      "Admin access"
    ],
    "description": "Create, view and manage multi-tenant management with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m34",
    "category": "Administration & Access",
    "name": "Audit Log",
    "screen": "Administration",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Activity list",
      "Filters",
      "User/action details",
      "Export"
    ],
    "description": "Create, view and manage audit log with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m35",
    "category": "Administration & Access",
    "name": "System Configuration",
    "screen": "Administration",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "General settings",
      "Business rules",
      "Feature settings",
      "Save/reset"
    ],
    "description": "Create, view and manage system configuration with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m36",
    "category": "Administration & Access",
    "name": "Feature Toggle Management",
    "screen": "Administration",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Feature list",
      "Enable/disable",
      "Role/tenant scope"
    ],
    "description": "Create, view and manage feature toggle management with the related validation, workflow and status handling.",
    "tags": [
      "administration & access"
    ]
  },
  {
    "id": "m37",
    "category": "Data, Search & Workflow",
    "name": "Master List - Basic CRUD",
    "screen": "Master Data",
    "complexity": "Basic",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "List",
      "Search",
      "Pagination",
      "Add",
      "Edit",
      "Delete"
    ],
    "description": "Create, view and manage master list - basic crud with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m38",
    "category": "Data, Search & Workflow",
    "name": "Master List - Advanced",
    "screen": "Master Data",
    "complexity": "Medium",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "List",
      "Advanced filters",
      "Search",
      "Bulk actions",
      "Import/export",
      "Status"
    ],
    "description": "Create, view and manage master list - advanced with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m39",
    "category": "Data, Search & Workflow",
    "name": "Detail Page - Standard",
    "screen": "Detail Page",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Header summary",
      "Sections",
      "Related records",
      "Activity"
    ],
    "description": "Create, view and manage detail page - standard with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m40",
    "category": "Data, Search & Workflow",
    "name": "Detail Page - History",
    "screen": "Detail Page",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile sections",
      "Timeline",
      "Related records",
      "Status history"
    ],
    "description": "Create, view and manage detail page - history with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m41",
    "category": "Data, Search & Workflow",
    "name": "Categories Management",
    "screen": "Content / Master Data",
    "complexity": "Basic",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Category list",
      "Add/edit/delete",
      "Status",
      "Ordering"
    ],
    "description": "Create, view and manage categories management with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m42",
    "category": "Data, Search & Workflow",
    "name": "Sub-Categories Management",
    "screen": "Content / Master Data",
    "complexity": "Basic",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Parent mapping",
      "List",
      "CRUD",
      "Status"
    ],
    "description": "Create, view and manage sub-categories management with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m43",
    "category": "Data, Search & Workflow",
    "name": "Tags Management",
    "screen": "Content / Master Data",
    "complexity": "Basic",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Tag list",
      "Create/edit/delete",
      "Usage count"
    ],
    "description": "Create, view and manage tags management with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m44",
    "category": "Data, Search & Workflow",
    "name": "Media Library",
    "screen": "Content Management",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Upload",
      "Folders",
      "Search",
      "Preview",
      "Delete",
      "Metadata"
    ],
    "description": "Create, view and manage media library with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m45",
    "category": "Data, Search & Workflow",
    "name": "Document Management",
    "screen": "Content Management",
    "complexity": "Medium",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Upload",
      "Versioning",
      "Preview/download",
      "Access rules"
    ],
    "description": "Create, view and manage document management with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m46",
    "category": "Data, Search & Workflow",
    "name": "File Upload Workflow",
    "screen": "Data Management",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Upload",
      "Validation",
      "Progress",
      "Error handling"
    ],
    "description": "Create, view and manage file upload workflow with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m47",
    "category": "Data, Search & Workflow",
    "name": "Import / Export",
    "screen": "Data Management",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "CSV/Excel export",
      "Import",
      "Mapping",
      "Validation"
    ],
    "description": "Create, view and manage import / export with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m48",
    "category": "Data, Search & Workflow",
    "name": "Advanced Search",
    "screen": "Search",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Keyword search",
      "Filters",
      "Sorting",
      "Pagination",
      "Saved search"
    ],
    "description": "Create, view and manage advanced search with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m49",
    "category": "Data, Search & Workflow",
    "name": "Global Search",
    "screen": "Search",
    "complexity": "Advanced",
    "baseHours": 26,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Cross-module search",
      "Suggestions",
      "Recent searches",
      "Deep links"
    ],
    "description": "Create, view and manage global search with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m50",
    "category": "Data, Search & Workflow",
    "name": "Saved Filters / Views",
    "screen": "Search",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Save filter",
      "Rename",
      "Default view",
      "Delete"
    ],
    "description": "Create, view and manage saved filters / views with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m51",
    "category": "Data, Search & Workflow",
    "name": "Approval Workflow - Single Level",
    "screen": "Workflow",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Submit",
      "Approve",
      "Reject",
      "Comments",
      "Status"
    ],
    "description": "Create, view and manage approval workflow - single level with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m52",
    "category": "Data, Search & Workflow",
    "name": "Approval Workflow - Multi Level",
    "screen": "Workflow",
    "complexity": "Advanced",
    "baseHours": 38,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Levels",
      "Role routing",
      "Approve/reject",
      "Escalation",
      "History"
    ],
    "description": "Create, view and manage approval workflow - multi level with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m53",
    "category": "Data, Search & Workflow",
    "name": "Maker Checker",
    "screen": "Workflow",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Maker role",
      "Checker role",
      "Change comparison",
      "Approval history"
    ],
    "description": "Create, view and manage maker checker with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m54",
    "category": "Data, Search & Workflow",
    "name": "Status Workflow",
    "screen": "Workflow",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Statuses",
      "Transitions",
      "Validation",
      "History"
    ],
    "description": "Create, view and manage status workflow with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m55",
    "category": "Data, Search & Workflow",
    "name": "Task Assignment",
    "screen": "Workflow",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Assign",
      "Due date",
      "Priority",
      "Status",
      "Comments"
    ],
    "description": "Create, view and manage task assignment with the related validation, workflow and status handling.",
    "tags": [
      "data, search & workflow"
    ]
  },
  {
    "id": "m56",
    "category": "Communication & Support",
    "name": "Email Template Management",
    "screen": "Communication",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Template list",
      "Rich editor",
      "Placeholders",
      "Preview",
      "Enable/disable"
    ],
    "description": "Create, view and manage email template management with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m57",
    "category": "Communication & Support",
    "name": "Welcome Email",
    "screen": "Communication",
    "complexity": "Basic",
    "baseHours": 5,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Template",
      "Trigger",
      "Delivery status"
    ],
    "description": "Create, view and manage welcome email with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m58",
    "category": "Communication & Support",
    "name": "Password Reset Email",
    "screen": "Communication",
    "complexity": "Basic",
    "baseHours": 5,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Template",
      "Secure link",
      "Expiry"
    ],
    "description": "Create, view and manage password reset email with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m59",
    "category": "Communication & Support",
    "name": "Invitation Email",
    "screen": "Communication",
    "complexity": "Basic",
    "baseHours": 5,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Template",
      "Recipient",
      "Resend"
    ],
    "description": "Create, view and manage invitation email with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m60",
    "category": "Communication & Support",
    "name": "Notification Center",
    "screen": "Communication",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Notification list",
      "Read/unread",
      "Deep link",
      "Clear"
    ],
    "description": "Create, view and manage notification center with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m61",
    "category": "Communication & Support",
    "name": "Push Notifications",
    "screen": "Communication",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "backend",
      "mobile"
    ],
    "submodules": [
      "Device token",
      "Send",
      "Targeting",
      "Delivery status"
    ],
    "description": "Create, view and manage push notifications with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m62",
    "category": "Communication & Support",
    "name": "SMS / OTP",
    "screen": "Communication",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "backend",
      "mobile"
    ],
    "submodules": [
      "OTP generation",
      "Send",
      "Verify",
      "Retry/expiry"
    ],
    "description": "Create, view and manage sms / otp with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m63",
    "category": "Communication & Support",
    "name": "WhatsApp Notifications",
    "screen": "Communication",
    "complexity": "Advanced",
    "baseHours": 20,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Template",
      "Trigger",
      "Delivery status"
    ],
    "description": "Create, view and manage whatsapp notifications with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m64",
    "category": "Communication & Support",
    "name": "In-App Announcements",
    "screen": "Communication",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Create announcement",
      "Target users",
      "Schedule",
      "Dismiss"
    ],
    "description": "Create, view and manage in-app announcements with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m65",
    "category": "Communication & Support",
    "name": "Support Ticket Management",
    "screen": "Support",
    "complexity": "Medium",
    "baseHours": 26,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Ticket list",
      "Create",
      "Priority",
      "Assignment",
      "Comments",
      "Status"
    ],
    "description": "Create, view and manage support ticket management with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m66",
    "category": "Communication & Support",
    "name": "Chat / Messaging",
    "screen": "Communication",
    "complexity": "Advanced",
    "baseHours": 40,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Conversations",
      "Messages",
      "Attachments",
      "Read status",
      "Notifications"
    ],
    "description": "Create, view and manage chat / messaging with the related validation, workflow and status handling.",
    "tags": [
      "communication & support"
    ]
  },
  {
    "id": "m67",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Product Management",
    "screen": "Commerce",
    "complexity": "Medium",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Product list",
      "Search",
      "Categories",
      "Add/edit",
      "Status",
      "Media"
    ],
    "description": "Create, view and manage product management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m68",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Product Detail",
    "screen": "Commerce",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Overview",
      "Pricing",
      "Variants",
      "Media",
      "Related products"
    ],
    "description": "Create, view and manage product detail with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m69",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Shopping Cart",
    "screen": "Commerce",
    "complexity": "Medium",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Add/remove",
      "Quantity",
      "Price calculation",
      "Availability"
    ],
    "description": "Create, view and manage shopping cart with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m70",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Checkout",
    "screen": "Commerce",
    "complexity": "Advanced",
    "baseHours": 32,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Address",
      "Order summary",
      "Tax/shipping",
      "Payment handoff",
      "Confirmation"
    ],
    "description": "Create, view and manage checkout with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m71",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Order Management",
    "screen": "Commerce",
    "complexity": "Advanced",
    "baseHours": 32,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Order list",
      "Filters",
      "Order detail",
      "Status",
      "Refund/cancel"
    ],
    "description": "Create, view and manage order management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m72",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Order Detail - Full History",
    "screen": "Commerce",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Customer",
      "Items",
      "Payment",
      "Shipment",
      "Timeline"
    ],
    "description": "Create, view and manage order detail - full history with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m73",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Payment Gateway - Base",
    "screen": "Payments",
    "complexity": "Medium",
    "baseHours": 30,
    "platforms": [
      "backend",
      "web",
      "mobile"
    ],
    "submodules": [
      "Gateway setup",
      "Payment initiation",
      "Callback/webhook",
      "Success/failure",
      "Transaction record"
    ],
    "description": "Create, view and manage payment gateway - base with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m74",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Payment Gateway - Split Payment",
    "screen": "Payments",
    "complexity": "Advanced",
    "baseHours": 10,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Multiple beneficiaries",
      "Split rules",
      "Settlement mapping"
    ],
    "description": "Create, view and manage payment gateway - split payment with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m75",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Payment Gateway - Subscription",
    "screen": "Payments",
    "complexity": "Advanced",
    "baseHours": 20,
    "platforms": [
      "backend",
      "web",
      "mobile"
    ],
    "submodules": [
      "Recurring plan",
      "Charge cycle",
      "Webhook",
      "Retry",
      "Cancellation"
    ],
    "description": "Create, view and manage payment gateway - subscription with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m76",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Refund Management",
    "screen": "Payments",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Refund request",
      "Eligibility",
      "Gateway call",
      "Status",
      "History"
    ],
    "description": "Create, view and manage refund management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m77",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Payment Reconciliation",
    "screen": "Payments",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Transaction matching",
      "Mismatch list",
      "Manual reconciliation",
      "Export"
    ],
    "description": "Create, view and manage payment reconciliation with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m78",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Wallet Management",
    "screen": "Payments",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Balance",
      "Credit/debit",
      "Transactions",
      "Refund to wallet",
      "Ledger"
    ],
    "description": "Create, view and manage wallet management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m79",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Coupon Management",
    "screen": "Commerce",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Coupon CRUD",
      "Rules",
      "Validity",
      "Usage limits"
    ],
    "description": "Create, view and manage coupon management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m80",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Tax Configuration",
    "screen": "Commerce",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Tax rules",
      "Jurisdiction",
      "Rates",
      "Calculation"
    ],
    "description": "Create, view and manage tax configuration with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m81",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Subscription Plan Management",
    "screen": "Subscriptions",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Plans",
      "Pricing",
      "Billing cycle",
      "Features",
      "Status"
    ],
    "description": "Create, view and manage subscription plan management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m82",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Customer Subscription Management",
    "screen": "Subscriptions",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Current plan",
      "Upgrade/downgrade",
      "Renewal",
      "Cancel",
      "History"
    ],
    "description": "Create, view and manage customer subscription management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m83",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Invoice Management",
    "screen": "Payments",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Invoice generation",
      "PDF",
      "Status",
      "Download"
    ],
    "description": "Create, view and manage invoice management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m84",
    "category": "Commerce, Payments & Subscriptions",
    "name": "Payout Management",
    "screen": "Payments",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Payout requests",
      "Approval",
      "Bank details",
      "Status",
      "Reports"
    ],
    "description": "Create, view and manage payout management with the related validation, workflow and status handling.",
    "tags": [
      "commerce, payments & subscriptions"
    ]
  },
  {
    "id": "m85",
    "category": "CMS & Content",
    "name": "CMS Page Management",
    "screen": "CMS",
    "complexity": "Medium",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Page list",
      "Editor",
      "SEO fields",
      "Publish/unpublish",
      "Preview"
    ],
    "description": "Create, view and manage cms page management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m86",
    "category": "CMS & Content",
    "name": "Blog / Post Management",
    "screen": "CMS",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Post list",
      "Editor",
      "Categories",
      "Tags",
      "Publish workflow"
    ],
    "description": "Create, view and manage blog / post management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m87",
    "category": "CMS & Content",
    "name": "Portfolio / Case Study Management",
    "screen": "CMS",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Listing",
      "Detail",
      "Categories",
      "Tags",
      "Media",
      "Publish"
    ],
    "description": "Create, view and manage portfolio / case study management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m88",
    "category": "CMS & Content",
    "name": "Event Management",
    "screen": "CMS",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Event CRUD",
      "Dates",
      "Venue/online",
      "Registration",
      "Status"
    ],
    "description": "Create, view and manage event management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m89",
    "category": "CMS & Content",
    "name": "Webinar Management",
    "screen": "CMS",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Webinar CRUD",
      "Registration",
      "Meeting link",
      "Reminders"
    ],
    "description": "Create, view and manage webinar management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m90",
    "category": "CMS & Content",
    "name": "FAQ Management",
    "screen": "CMS",
    "complexity": "Basic",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "FAQ CRUD",
      "Category",
      "Ordering",
      "Publish"
    ],
    "description": "Create, view and manage faq management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m91",
    "category": "CMS & Content",
    "name": "Banner Management",
    "screen": "CMS",
    "complexity": "Basic",
    "baseHours": 12,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Banner CRUD",
      "Image",
      "CTA",
      "Schedule",
      "Status"
    ],
    "description": "Create, view and manage banner management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m92",
    "category": "CMS & Content",
    "name": "Navigation Menu Management",
    "screen": "CMS",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Menu items",
      "Ordering",
      "Nested items",
      "Visibility"
    ],
    "description": "Create, view and manage navigation menu management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m93",
    "category": "CMS & Content",
    "name": "SEO Management",
    "screen": "CMS",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Meta title",
      "Meta description",
      "Canonical",
      "Open Graph",
      "Sitemap controls"
    ],
    "description": "Create, view and manage seo management with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m94",
    "category": "CMS & Content",
    "name": "Localization / Translation",
    "screen": "CMS",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Languages",
      "Translation fields",
      "Fallback",
      "Locale settings"
    ],
    "description": "Create, view and manage localization / translation with the related validation, workflow and status handling.",
    "tags": [
      "cms & content"
    ]
  },
  {
    "id": "m95",
    "category": "Vertical & Marketplace",
    "name": "Listing Management",
    "screen": "Marketplace / Real Estate",
    "complexity": "Advanced",
    "baseHours": 32,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Listing list",
      "Search",
      "Filters",
      "Detail",
      "Media",
      "Status"
    ],
    "description": "Create, view and manage listing management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m96",
    "category": "Vertical & Marketplace",
    "name": "Seller / Vendor Management",
    "screen": "Marketplace",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Onboarding",
      "KYC",
      "Profile",
      "Products",
      "Orders",
      "Payouts"
    ],
    "description": "Create, view and manage seller / vendor management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m97",
    "category": "Vertical & Marketplace",
    "name": "Vendor Approval",
    "screen": "Marketplace",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Application review",
      "KYC review",
      "Approve/reject",
      "Status"
    ],
    "description": "Create, view and manage vendor approval with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m98",
    "category": "Vertical & Marketplace",
    "name": "Lead Management",
    "screen": "CRM",
    "complexity": "Medium",
    "baseHours": 26,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Lead list",
      "Search",
      "Assignment",
      "Stages",
      "Notes",
      "History"
    ],
    "description": "Create, view and manage lead management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m99",
    "category": "Vertical & Marketplace",
    "name": "CRM Contact Management",
    "screen": "CRM",
    "complexity": "Medium",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Contacts",
      "Search",
      "Segments",
      "Detail",
      "Activity"
    ],
    "description": "Create, view and manage crm contact management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m100",
    "category": "Vertical & Marketplace",
    "name": "Property Management",
    "screen": "Real Estate",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Property list",
      "Details",
      "Media",
      "Amenities",
      "Pricing",
      "Availability"
    ],
    "description": "Create, view and manage property management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m101",
    "category": "Vertical & Marketplace",
    "name": "Property Enquiry",
    "screen": "Real Estate",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Enquiry form",
      "Assignment",
      "Status",
      "Follow-up"
    ],
    "description": "Create, view and manage property enquiry with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m102",
    "category": "Vertical & Marketplace",
    "name": "Booking / Reservation Management",
    "screen": "Travel / Booking",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Search",
      "Availability",
      "Traveller details",
      "Review",
      "Confirmation",
      "Voucher"
    ],
    "description": "Create, view and manage booking / reservation management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m103",
    "category": "Vertical & Marketplace",
    "name": "Hotel Search & Results",
    "screen": "Travel",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Destination",
      "Dates",
      "Rooms",
      "Results",
      "Filters",
      "Sort"
    ],
    "description": "Create, view and manage hotel search & results with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m104",
    "category": "Vertical & Marketplace",
    "name": "Attractions Search & Booking",
    "screen": "Travel",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Search",
      "Results",
      "Details",
      "Availability",
      "Booking"
    ],
    "description": "Create, view and manage attractions search & booking with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m105",
    "category": "Vertical & Marketplace",
    "name": "KYC Management",
    "screen": "Compliance",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Document upload",
      "Review",
      "Status",
      "Reject/resubmit",
      "History"
    ],
    "description": "Create, view and manage kyc management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m106",
    "category": "Vertical & Marketplace",
    "name": "Appointment Management",
    "screen": "Healthcare",
    "complexity": "Advanced",
    "baseHours": 30,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Provider availability",
      "Slots",
      "Booking",
      "Reschedule",
      "Cancel",
      "Status"
    ],
    "description": "Create, view and manage appointment management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m107",
    "category": "Vertical & Marketplace",
    "name": "Patient Record",
    "screen": "Healthcare",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Profile",
      "Appointments",
      "Documents",
      "History",
      "Consent"
    ],
    "description": "Create, view and manage patient record with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m108",
    "category": "Vertical & Marketplace",
    "name": "Transaction Management",
    "screen": "FinTech",
    "complexity": "Advanced",
    "baseHours": 32,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Transactions",
      "Filters",
      "Detail",
      "Status",
      "Export"
    ],
    "description": "Create, view and manage transaction management with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m109",
    "category": "Vertical & Marketplace",
    "name": "Payout / Withdrawal Requests",
    "screen": "FinTech",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Request",
      "Review",
      "Approve/reject",
      "Status",
      "History"
    ],
    "description": "Create, view and manage payout / withdrawal requests with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m110",
    "category": "Vertical & Marketplace",
    "name": "Risk / Compliance Review",
    "screen": "FinTech",
    "complexity": "Advanced",
    "baseHours": 36,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Case list",
      "Risk flags",
      "Review",
      "Decision",
      "Audit"
    ],
    "description": "Create, view and manage risk / compliance review with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m111",
    "category": "Vertical & Marketplace",
    "name": "Auction / Bidding",
    "screen": "Marketplace",
    "complexity": "Advanced",
    "baseHours": 38,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Bid placement",
      "Bid history",
      "Timers",
      "Winner",
      "Notifications"
    ],
    "description": "Create, view and manage auction / bidding with the related validation, workflow and status handling.",
    "tags": [
      "vertical & marketplace"
    ]
  },
  {
    "id": "m112",
    "category": "SaaS, Analytics & Growth",
    "name": "Tenant Onboarding",
    "screen": "SaaS",
    "complexity": "Advanced",
    "baseHours": 28,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Create tenant",
      "Admin user",
      "Plan",
      "Branding",
      "Activation"
    ],
    "description": "Create, view and manage tenant onboarding with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m113",
    "category": "SaaS, Analytics & Growth",
    "name": "Tenant Settings",
    "screen": "SaaS",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Branding",
      "General settings",
      "Security",
      "Notifications"
    ],
    "description": "Create, view and manage tenant settings with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m114",
    "category": "SaaS, Analytics & Growth",
    "name": "Usage & Limits",
    "screen": "SaaS",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Usage metrics",
      "Limits",
      "Thresholds",
      "Alerts"
    ],
    "description": "Create, view and manage usage & limits with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m115",
    "category": "SaaS, Analytics & Growth",
    "name": "API Key Management",
    "screen": "Developer Platform",
    "complexity": "Advanced",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Create key",
      "Rotate",
      "Revoke",
      "Scopes",
      "Usage"
    ],
    "description": "Create, view and manage api key management with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m116",
    "category": "SaaS, Analytics & Growth",
    "name": "Webhook Management",
    "screen": "Developer Platform",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Endpoint CRUD",
      "Events",
      "Signing secret",
      "Delivery logs",
      "Retry"
    ],
    "description": "Create, view and manage webhook management with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m117",
    "category": "SaaS, Analytics & Growth",
    "name": "Integration Marketplace",
    "screen": "SaaS",
    "complexity": "Advanced",
    "baseHours": 34,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Integration list",
      "Connect",
      "OAuth",
      "Configuration",
      "Disconnect"
    ],
    "description": "Create, view and manage integration marketplace with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m118",
    "category": "SaaS, Analytics & Growth",
    "name": "Reports - Basic",
    "screen": "Reporting",
    "complexity": "Basic",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Filters",
      "Table",
      "Export"
    ],
    "description": "Create, view and manage reports - basic with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m119",
    "category": "SaaS, Analytics & Growth",
    "name": "Reports - Advanced",
    "screen": "Reporting",
    "complexity": "Advanced",
    "baseHours": 32,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Filters",
      "Charts",
      "Drill-down",
      "Scheduling",
      "Export"
    ],
    "description": "Create, view and manage reports - advanced with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m120",
    "category": "SaaS, Analytics & Growth",
    "name": "Scheduled Reports",
    "screen": "Reporting",
    "complexity": "Advanced",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend"
    ],
    "submodules": [
      "Schedule",
      "Recipients",
      "Format",
      "History"
    ],
    "description": "Create, view and manage scheduled reports with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m121",
    "category": "SaaS, Analytics & Growth",
    "name": "Activity Timeline",
    "screen": "Reporting",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Timeline",
      "Filters",
      "Actor",
      "Action"
    ],
    "description": "Create, view and manage activity timeline with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m122",
    "category": "SaaS, Analytics & Growth",
    "name": "Analytics Event Tracking",
    "screen": "Analytics",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "backend",
      "web",
      "mobile"
    ],
    "submodules": [
      "Event definitions",
      "Tracking",
      "Properties",
      "Reporting"
    ],
    "description": "Create, view and manage analytics event tracking with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m123",
    "category": "SaaS, Analytics & Growth",
    "name": "Feedback / Survey",
    "screen": "Engagement",
    "complexity": "Medium",
    "baseHours": 20,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Form",
      "Questions",
      "Submission",
      "Results"
    ],
    "description": "Create, view and manage feedback / survey with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m124",
    "category": "SaaS, Analytics & Growth",
    "name": "Ratings & Reviews",
    "screen": "Engagement",
    "complexity": "Medium",
    "baseHours": 22,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Submit review",
      "Moderation",
      "Rating summary",
      "Report review"
    ],
    "description": "Create, view and manage ratings & reviews with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m125",
    "category": "SaaS, Analytics & Growth",
    "name": "Favorites / Wishlist",
    "screen": "Engagement",
    "complexity": "Medium",
    "baseHours": 18,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Add/remove",
      "List",
      "Sync"
    ],
    "description": "Create, view and manage favorites / wishlist with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m126",
    "category": "SaaS, Analytics & Growth",
    "name": "Referral Management",
    "screen": "Growth",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Referral code",
      "Tracking",
      "Rewards",
      "History"
    ],
    "description": "Create, view and manage referral management with the related validation, workflow and status handling.",
    "tags": [
      "saas, analytics & growth"
    ]
  },
  {
    "id": "m127",
    "category": "Mobile App Foundation",
    "name": "Splash Screen",
    "screen": "Mobile Foundation",
    "complexity": "Basic",
    "baseHours": 4,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Brand logo",
      "Loading state"
    ],
    "description": "Create, view and manage splash screen with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m128",
    "category": "Mobile App Foundation",
    "name": "Walkthrough / Onboarding",
    "screen": "Mobile Foundation",
    "complexity": "Basic",
    "baseHours": 10,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Carousel",
      "Skip",
      "Progress"
    ],
    "description": "Create, view and manage walkthrough / onboarding with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m129",
    "category": "Mobile App Foundation",
    "name": "Deep Linking",
    "screen": "Mobile Foundation",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "mobile",
      "backend"
    ],
    "submodules": [
      "Route mapping",
      "Authenticated links",
      "Fallback"
    ],
    "description": "Create, view and manage deep linking with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m130",
    "category": "Mobile App Foundation",
    "name": "Push Notification Permission",
    "screen": "Mobile Foundation",
    "complexity": "Basic",
    "baseHours": 4,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Permission prompt",
      "Preference"
    ],
    "description": "Create, view and manage push notification permission with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m131",
    "category": "Mobile App Foundation",
    "name": "Location Permission",
    "screen": "Mobile Foundation",
    "complexity": "Basic",
    "baseHours": 4,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Permission prompt",
      "Denied state"
    ],
    "description": "Create, view and manage location permission with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m132",
    "category": "Mobile App Foundation",
    "name": "Live Location Sharing",
    "screen": "Mobile",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "mobile",
      "backend"
    ],
    "submodules": [
      "Start sharing",
      "Duration",
      "Map",
      "Stop sharing"
    ],
    "description": "Create, view and manage live location sharing with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m133",
    "category": "Mobile App Foundation",
    "name": "Camera / Media Capture",
    "screen": "Mobile",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Capture",
      "Preview",
      "Retake",
      "Upload"
    ],
    "description": "Create, view and manage camera / media capture with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m134",
    "category": "Mobile App Foundation",
    "name": "Offline Data Cache",
    "screen": "Mobile",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "mobile",
      "backend"
    ],
    "submodules": [
      "Local storage",
      "Sync",
      "Conflict handling",
      "Offline state"
    ],
    "description": "Create, view and manage offline data cache with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m135",
    "category": "Mobile App Foundation",
    "name": "Biometric Login",
    "screen": "Mobile Security",
    "complexity": "Medium",
    "baseHours": 10,
    "platforms": [
      "mobile"
    ],
    "submodules": [
      "Enable",
      "Fingerprint/Face ID",
      "Fallback"
    ],
    "description": "Create, view and manage biometric login with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m136",
    "category": "Mobile App Foundation",
    "name": "App Settings",
    "screen": "Mobile",
    "complexity": "Basic",
    "baseHours": 10,
    "platforms": [
      "mobile",
      "backend"
    ],
    "submodules": [
      "Preferences",
      "Notifications",
      "Language",
      "Logout"
    ],
    "description": "Create, view and manage app settings with the related validation, workflow and status handling.",
    "tags": [
      "mobile app foundation"
    ]
  },
  {
    "id": "m137",
    "category": "Cross-Functional & Delivery",
    "name": "UI/UX - Simple Form Screen",
    "screen": "UI/UX",
    "complexity": "Basic",
    "baseHours": 8,
    "platforms": [
      "ux"
    ],
    "submodules": [
      "Form layout",
      "Validation states",
      "Responsive behavior"
    ],
    "description": "Create, view and manage ui/ux - simple form screen with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m138",
    "category": "Cross-Functional & Delivery",
    "name": "UI/UX - List / Table Screen",
    "screen": "UI/UX",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "ux"
    ],
    "submodules": [
      "List/table layout",
      "Filters",
      "Pagination",
      "Row actions",
      "Empty/loading states"
    ],
    "description": "Create, view and manage ui/ux - list / table screen with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m139",
    "category": "Cross-Functional & Delivery",
    "name": "UI/UX - Detail Screen",
    "screen": "UI/UX",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "ux"
    ],
    "submodules": [
      "Sectioned detail layout",
      "Related data",
      "Action states",
      "Responsive behavior"
    ],
    "description": "Create, view and manage ui/ux - detail screen with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m140",
    "category": "Cross-Functional & Delivery",
    "name": "UI/UX - Dashboard Functional Flow",
    "screen": "UI/UX",
    "complexity": "Advanced",
    "baseHours": 20,
    "platforms": [
      "ux"
    ],
    "submodules": [
      "Widget hierarchy",
      "Charts",
      "Filters",
      "Drill-down",
      "Responsive states"
    ],
    "description": "Create, view and manage ui/ux - dashboard functional flow with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m141",
    "category": "Cross-Functional & Delivery",
    "name": "API Integration - Simple REST",
    "screen": "Integration",
    "complexity": "Basic",
    "baseHours": 10,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Authentication",
      "Request mapping",
      "Response mapping",
      "Error handling"
    ],
    "description": "Create, view and manage api integration - simple rest with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m142",
    "category": "Cross-Functional & Delivery",
    "name": "API Integration - Complex",
    "screen": "Integration",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Multiple endpoints",
      "Data transformation",
      "Retries",
      "Error handling",
      "Logging"
    ],
    "description": "Create, view and manage api integration - complex with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m143",
    "category": "Cross-Functional & Delivery",
    "name": "Third-Party SDK Integration",
    "screen": "Integration",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "backend",
      "mobile",
      "web"
    ],
    "submodules": [
      "SDK setup",
      "Configuration",
      "Callbacks",
      "Testing"
    ],
    "description": "Create, view and manage third-party sdk integration with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m144",
    "category": "Cross-Functional & Delivery",
    "name": "Search Engine Integration",
    "screen": "Integration",
    "complexity": "Advanced",
    "baseHours": 24,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Indexing",
      "Search mapping",
      "Filters",
      "Reindexing"
    ],
    "description": "Create, view and manage search engine integration with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m145",
    "category": "Cross-Functional & Delivery",
    "name": "Maps Integration",
    "screen": "Integration",
    "complexity": "Medium",
    "baseHours": 16,
    "platforms": [
      "web",
      "backend",
      "mobile"
    ],
    "submodules": [
      "Map display",
      "Search",
      "Markers",
      "Location selection"
    ],
    "description": "Create, view and manage maps integration with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m146",
    "category": "Cross-Functional & Delivery",
    "name": "Email Service Integration",
    "screen": "Integration",
    "complexity": "Basic",
    "baseHours": 8,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "SMTP/API",
      "Templates",
      "Delivery status"
    ],
    "description": "Create, view and manage email service integration with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m147",
    "category": "Cross-Functional & Delivery",
    "name": "File Storage Integration",
    "screen": "Integration",
    "complexity": "Medium",
    "baseHours": 12,
    "platforms": [
      "backend"
    ],
    "submodules": [
      "Upload",
      "Storage",
      "Signed URL",
      "Delete"
    ],
    "description": "Create, view and manage file storage integration with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m148",
    "category": "Cross-Functional & Delivery",
    "name": "Monitoring & Error Logging",
    "screen": "DevOps",
    "complexity": "Medium",
    "baseHours": 14,
    "platforms": [
      "backend",
      "web",
      "mobile"
    ],
    "submodules": [
      "Error capture",
      "Logs",
      "Alerts",
      "Environment configuration"
    ],
    "description": "Create, view and manage monitoring & error logging with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m149",
    "category": "Cross-Functional & Delivery",
    "name": "QA - Functional Regression",
    "screen": "QA",
    "complexity": "Medium",
    "baseHours": 0,
    "platforms": [
      "qa"
    ],
    "submodules": [
      "Regression checklist",
      "Test execution",
      "Defect validation"
    ],
    "description": "Create, view and manage qa - functional regression with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  },
  {
    "id": "m150",
    "category": "Cross-Functional & Delivery",
    "name": "Deployment - Web",
    "screen": "DevOps",
    "complexity": "Medium",
    "baseHours": 0,
    "platforms": [
      "devops"
    ],
    "submodules": [
      "Environment setup",
      "Build",
      "Deployment",
      "Rollback"
    ],
    "description": "Create, view and manage deployment - web with the related validation, workflow and status handling.",
    "tags": [
      "cross-functional & delivery"
    ]
  }
];
