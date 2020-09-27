import { registerApplication, start } from "single-spa";

registerApplication(
  {
    name: "@y/first-app",
    app: () => System.import("@y/first-app"),
    activeWhen: ["/react"],
  }
);

registerApplication(
  {
    name: "second-app",
    app: () => System.import("second-app"),
    activeWhen: ["/ajs"],
  }
);

start({
  urlRerouteOnly: true,
});
