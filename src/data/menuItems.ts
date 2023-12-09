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
        icon: "fluent-mdl2:money",
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
        title: "Policies",
        icon: "iconoir:privacy-policy",
        items: [
          {
            title: "All",
            path: "/private/marine/policies/all",
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
        title: "Intermediaries",
        icon: "heroicons:user-group",
        items: [
          {
            title: "All",
            path: "/private/marine/intermediaries",
          },
          {
            title: "New",
            path: "/private/marine/intermediaries/add",
          },
          {
            title: "All Brokers",
            path: "/private/marine/intermediaries/brokers",
          },
          {
            title: "All Agents",
            path: "/private/marine/intermediaries/agents",
          },
          {
            title: "All Reinsure",
            path: "/private/marine/intermediaries/reinsures",
          }
        ],
      },
      {
        title: "Customers",
        icon: "ph:users",
        items: [
          {
            title: "All",
            path: "/private/marine/intermediaries",
          },
          {
            title: "New",
            path: "/private/marine/intermediaries/add",
          }
        ],
      },
      {
        title: "Stickers",
        icon: "mdi:sticker-check-outline",
        items: [
          {
            title: "All Sticker Prices",
            path: "/private/marine/stickers",
          },
          {
            title: "Sticker Price",
            path: "/private/marine/stickers/new",
          },
          {
            title: "All Purchases",
            path: "/private/marine/stickers/purchase/reciepts",
          },
          {
            title: "New Stickers",
            path: "/private/marine/stickers/purchase",
          }
        ],
      }
      , {
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
        title: "Branches",
        icon: "clarity:building-line",
        items: [
          {
            title: "All Branches",
            path: "/private/marine/settings/branches",
          },
          {
            title: "New Branch",
            path: "/private/marine/settings/branches/add",
          }

        ],
      },
      {
        title: "Users",
        icon: "ph:user",
        items: [
          {
            title: "All Users",
            path: "/private/marine/settings/users",
          }
        ],
      },
      {
        title: "Tariffs",
        icon: "et:gears",
        items: [
          {
            title: "All Tariffs",
            path: "/private/marine/settings/tariffs",
          },
          {
            title: "New Tariff",
            path: "/private/marine/settings/tariffs/new",
          }
        ],
      },

    ]
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
