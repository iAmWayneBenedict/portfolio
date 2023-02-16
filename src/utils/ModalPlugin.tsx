import React from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { useEffect, useState } from "react";

class ModalPlugin extends ScrollbarPlugin {
	static pluginName = "modal";

	static defaultOptions = {
		open: false,
	};

	transformDelta(delta: any) {
		return this.options.open ? { x: 0, y: 0 } : delta;
	}
}

export default ModalPlugin;
