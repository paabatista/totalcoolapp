const AdminBro = require("../node_modules/admin-bro");
const AdminBroExpress = require("../node_modules/admin-bro-expressjs");
const mongoose = require("mongoose");
const AdminBroMongoose = require("../node_modules/admin-bro-mongoose");
const Article = require("../models/article.model.js");
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
  databases: [mongoose],

  rootPath: "/admin",
  resources: [
    {
      resource: Article,
      options: {
        properties: {
          html: {
            type: "textarea",
            isVisible: { show: true, edit: true, filter: false, list: false },
          },
        },
      },
    },
  ],
  branding: {
    logo: "/logo_keto.png",
    companyName: "Keto para tu Bolsillo",
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "admin-bro",
  cookiePassword: "H9m7Yj4jGNaVT",
});

module.exports = router;
