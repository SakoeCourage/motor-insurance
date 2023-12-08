export const marineMenuItems = [
  {
    title: "Basics",
    menus: [
      {
        title: "Dashboard",
        icon: "radix-icons:dashboard",
        path: "/private/marine/dashboard",
      },
      {
        title: "Claims",
        icon: "la:edit-solid",
        items: [
          {
            title: "All Claims",
            path: "/private/marine/claims/all-claims",
          },
          {
            title: "New Claims",
            path: "/private/marine/claims/new-claims",
          },
        ],
      },
      {
        title: "Intermediaries",
        icon: "la:edit-solid",
        items: [
          {
            title: "All Intermediary",
            path: "/private/marine/intermediaries",
          },
          {
            title: "Add intermediary",
            path: "/private/marine/intermediaries/add",
          },
        ],
      },
      {
        title: "Policies",
        icon: "la:edit-solid",
        items: [
          {
            title: "All",
            path: "/private/marine/policies/all",
          },
          {
            title: "Expiring",
            path: "/private/marine/policies/expiring",
          },
          {
            title: "New",
            path: "/private/marine/policies/new",
          },
          {
            title: "All Ncd",
            path: "/private/marine/policies/all-ncd",
          },
        ],
      },
      {
        title: "Reporting",
        icon: "carbon:report",
        items: [
          {
            title: "Pending Policies",
            path: "/private/marine/reporting/pending_policies",
          },
          {
            title: "Approved Policies",
            path: "/private/marine/reporting/approved_policies",
          },
          {
            title: "Cancelled Policies",
            path: "/private/marine/reporting/cancelled_policies",
          },
        ],
      },
    ],
  },

  {
    title: "System Setups",
    menus: [
      {
        title: "Customer Mgt.",
        icon: "streamline:information-desk-customer",
        items: [
          {
            title: "Customers",
            path: "/private/marine/customer_mgt/customers",
          },
          {
            title: "Customer Categories",
            path: "/private/marine/customer_mgt/customer_categories",
          },
          {
            title: "Customer Types",
            path: "/private/marine/customer_mgt/customer_types",
          },
          {
            title: "Identification Types",
            path: "/private/marine/customer_mgt/identification_types",
          },
          {
            title: "Occupations",
            path: "/private/marine/customer_mgt/occupations",
          },
        ],
      },
      {
        title: "User Management",
        icon: "fluent:people-20-regular",
        items: [
          { title: "Users", path: "/private/marine/user_management/users" },
          { title: "Roles", path: "/private/marine/user_management/roles" },
          {
            title: "Permissions",
            path: "/private/marine/user_management/permissions",
          },
        ],
      },
      {
        title: "Institution Mgt.",
        icon: "pixelarticons:buildings",
        items: [
          {
            title: "Institutions",
            path: "/private/marine/institution_mgt/institutions",
          },
          {
            title: "Institution Types",
            path: "/private/marine/institution_mgt/institution_types",
          },
        ],
      },
      {
        title: "General",
        icon: "clarity:cog-line",
        items: [
          {
            title: "Ratings",
            path: "/private/marine/general/ratings",
          },
          { title: "Interests", path: "/private/marine/general/interests" },
          { title: "Cover Types", path: "/private/marine/general/cover_types" },
          {
            title: "Policy Extensions",
            path: "/private/marine/general/policy_extensions",
          },
          { title: "Ports", path: "/private/marine/general/ports" },
          {
            title: "Shipping Types",
            path: "/private/marine/general/shipping_types",
          },
          { title: "Carriers", path: "/private/marine/general/carriers" },
          { title: "Countries", path: "/private/marine/general/countries" },
          {
            title: "Exchange Rates",
            path: "/private/marine/general/exchange_rates",
          },
          { title: "Currencies", path: "/private/marine/general/currencies" },
          { title: "Banks", path: "/private/marine/general/banks" },
          {
            title: "Financial Interest",
            path: "/private/marine/general/financial_interest",
          },
        ],
      },
    ],
  },
];

export const fireMenuItems = [
  {
    title: "Navigations",
    menus: [
      {
        title: "Dashboard",
        icon: "radix-icons:dashboard",
        path: "/private/dashboard",
      },
    ],
  },
  {
    title: "Settings",
    menus: [
      {
        title: "Settings",
        icon: "iconamoon:settings-light",
        items: [
          { title: "Item 1", path: "/private/dashboard" },
          { title: "Item 2", path: "" },
          { title: "Item 1", path: "", items: [{ title: "Item 11" }] },
        ],
      },
      {
        title: "Test",
        icon: "iconamoon:settings-light",
        items: [
          { title: "Item 1", path: "" },
          { title: "Item 2", path: "" },
          { title: "Item 1", path: "", items: [{ title: "Item 11" }] },
        ],
      },
      {
        title: "User Management",
        icon: "mdi:account-cog-outline",
        path: "/private/userManagement",
      },
    ],
  },
];
