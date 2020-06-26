import { PiletApi } from "piral";
import * as React from "react";

import "font-awesome/css/font-awesome.css";

export function setup(app: PiletApi) {
  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
}
