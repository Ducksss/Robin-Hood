import pkg from "../package.json";
import { ManifestType } from "@src/manifest-type";

const manifest: ManifestType = {
    manifest_version: 3,
    name: pkg.displayName,
    version: pkg.version,
    description: pkg.description,
    background: {
        service_worker: "src/pages/background/index.js",
        type: "module"
    },
    action: {
        default_icon: {
            "16": "icon-128.png",
            "32": "icon-128.png",
            "48": "icon-128.png",
            "128": "icon-128.png"
        }
    },
    icons: {
        "16": "icon-128.png",
        "32": "icon-128.png",
        "48": "icon-128.png",
        "128": "icon-128.png"
    },
    options_page: "src/pages/options/index.html",
    permissions: ["storage", "activeTab", "scripting", "tabs"],
    host_permissions: ["https://www.notion.so/*", "https://www.notion.so/**"],
    content_scripts: [
        {
            matches: ["http://*/*", "https://*/*", "<all_urls>"],
            js: ["src/pages/content/index.js"],
            css: ["contentStyle.css"]
        }
    ],
    web_accessible_resources: [
        {
            resources: ["src/pages/modal/index.html", "public/*"],
            matches: ["https://www.notion.so/*"]
        }
    ]
};

export default manifest;
