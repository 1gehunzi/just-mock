import {
  off,
  on
} from "./chunk-UQUDCVBP.js";
import {
  computed,
  getCurrentInstance,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  readonly,
  ref,
  watch
} from "./chunk-Y6GDJVBF.js";
import {
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-3WXJEUH5.js";

// node_modules/vooks/es/use-false-until-truthy.js
init_define_MZ_ZOOM_OPTIONS();
function useFalseUntilTruthy(originalRef) {
  const currentRef = ref(!!originalRef.value);
  if (currentRef.value)
    return readonly(currentRef);
  const stop = watch(originalRef, (value) => {
    if (value) {
      currentRef.value = true;
      stop();
    }
  });
  return readonly(currentRef);
}

// node_modules/vooks/es/use-memo.js
init_define_MZ_ZOOM_OPTIONS();
function useMemo(getterOrOptions) {
  const computedValueRef = computed(getterOrOptions);
  const valueRef = ref(computedValueRef.value);
  watch(computedValueRef, (value) => {
    valueRef.value = value;
  });
  if (typeof getterOrOptions === "function") {
    return valueRef;
  } else {
    return {
      __v_isRef: true,
      get value() {
        return valueRef.value;
      },
      set value(v) {
        getterOrOptions.set(v);
      }
    };
  }
}
var use_memo_default = useMemo;

// node_modules/vooks/es/on-fonts-ready.js
init_define_MZ_ZOOM_OPTIONS();

// node_modules/vooks/es/utils.js
init_define_MZ_ZOOM_OPTIONS();
function hasInstance() {
  return getCurrentInstance() !== null;
}
var isBrowser = typeof window !== "undefined";

// node_modules/vooks/es/on-fonts-ready.js
var fontsReady;
var isFontReady;
var init = () => {
  var _a, _b;
  fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : void 0;
  isFontReady = false;
  if (fontsReady !== void 0) {
    void fontsReady.then(() => {
      isFontReady = true;
    });
  } else {
    isFontReady = true;
  }
};
init();
function onFontsReady(cb) {
  if (isFontReady)
    return;
  let deactivated = false;
  onMounted(() => {
    if (!isFontReady) {
      fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
        if (deactivated)
          return;
        cb();
      });
    }
  });
  onBeforeUnmount(() => {
    deactivated = true;
  });
}

// node_modules/vooks/es/use-click-position.js
init_define_MZ_ZOOM_OPTIONS();
var mousePositionRef = ref(null);
function clickHandler(e) {
  if (e.clientX > 0 || e.clientY > 0) {
    mousePositionRef.value = {
      x: e.clientX,
      y: e.clientY
    };
  } else {
    const { target } = e;
    if (target instanceof Element) {
      const { left, top, width, height } = target.getBoundingClientRect();
      if (left > 0 || top > 0) {
        mousePositionRef.value = {
          x: left + width / 2,
          y: top + height / 2
        };
      } else {
        mousePositionRef.value = { x: 0, y: 0 };
      }
    } else {
      mousePositionRef.value = null;
    }
  }
}
var usedCount = 0;
var managable = true;
function useClickPosition() {
  if (!isBrowser)
    return readonly(ref(null));
  if (usedCount === 0)
    on("click", document, clickHandler, true);
  const setup = () => {
    usedCount += 1;
  };
  if (managable && (managable = hasInstance())) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      usedCount -= 1;
      if (usedCount === 0)
        off("click", document, clickHandler, true);
    });
  } else {
    setup();
  }
  return readonly(mousePositionRef);
}

// node_modules/vooks/es/use-clicked.js
init_define_MZ_ZOOM_OPTIONS();
var clickedTimeRef = ref(void 0);
var usedCount2 = 0;
function handleClick() {
  clickedTimeRef.value = Date.now();
}
var managable2 = true;
function useClicked(timeout) {
  if (!isBrowser)
    return readonly(ref(false));
  const clickedRef = ref(false);
  let timerId = null;
  function clearTimer() {
    if (timerId !== null)
      window.clearTimeout(timerId);
  }
  function clickedHandler() {
    clearTimer();
    clickedRef.value = true;
    timerId = window.setTimeout(() => {
      clickedRef.value = false;
    }, timeout);
  }
  if (usedCount2 === 0) {
    on("click", window, handleClick, true);
  }
  const setup = () => {
    usedCount2 += 1;
    on("click", window, clickedHandler, true);
  };
  if (managable2 && (managable2 = hasInstance())) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      usedCount2 -= 1;
      if (usedCount2 === 0) {
        off("click", window, handleClick, true);
      }
      off("click", window, clickedHandler, true);
      clearTimer();
    });
  } else {
    setup();
  }
  return readonly(clickedRef);
}

// node_modules/vooks/es/use-os-theme.js
init_define_MZ_ZOOM_OPTIONS();
var usedCount3 = 0;
var supportMatchMedia = typeof window !== "undefined" && window.matchMedia !== void 0;
var osTheme = ref(null);
var darkMql;
var lightMql;
function handleDarkMqlChange(e) {
  if (e.matches) {
    osTheme.value = "dark";
  }
}
function handleLightMqlChange(e) {
  if (e.matches) {
    osTheme.value = "light";
  }
}
function init2() {
  darkMql = window.matchMedia("(prefers-color-scheme: dark)");
  lightMql = window.matchMedia("(prefers-color-scheme: light)");
  if (darkMql.matches) {
    osTheme.value = "dark";
  } else if (lightMql.matches) {
    osTheme.value = "light";
  } else {
    osTheme.value = null;
  }
  if (darkMql.addEventListener) {
    darkMql.addEventListener("change", handleDarkMqlChange);
    lightMql.addEventListener("change", handleLightMqlChange);
  } else if (darkMql.addListener) {
    darkMql.addListener(handleDarkMqlChange);
    lightMql.addListener(handleLightMqlChange);
  }
}
function clean() {
  if ("removeEventListener" in darkMql) {
    darkMql.removeEventListener("change", handleDarkMqlChange);
    lightMql.removeEventListener("change", handleLightMqlChange);
  } else if ("removeListener" in darkMql) {
    darkMql.removeListener(handleDarkMqlChange);
    lightMql.removeListener(handleLightMqlChange);
  }
  darkMql = void 0;
  lightMql = void 0;
}
var managable3 = true;
function useOsTheme() {
  if (!supportMatchMedia) {
    return readonly(osTheme);
  }
  if (false) {
    return readonly(osTheme);
  }
  if (usedCount3 === 0)
    init2();
  if (managable3 && (managable3 = hasInstance())) {
    onBeforeMount(() => {
      usedCount3 += 1;
    });
    onBeforeUnmount(() => {
      usedCount3 -= 1;
      if (usedCount3 === 0)
        clean();
    });
  }
  return readonly(osTheme);
}

// node_modules/vooks/es/use-merged-state.js
init_define_MZ_ZOOM_OPTIONS();
function useMergedState(controlledStateRef, uncontrolledStateRef) {
  watch(controlledStateRef, (value) => {
    if (value !== void 0) {
      uncontrolledStateRef.value = value;
    }
  });
  return computed(() => {
    if (controlledStateRef.value === void 0) {
      return uncontrolledStateRef.value;
    }
    return controlledStateRef.value;
  });
}

// node_modules/vooks/es/life-cycle/use-is-mounted.js
init_define_MZ_ZOOM_OPTIONS();
function isMounted() {
  const isMounted2 = ref(false);
  onMounted(() => {
    isMounted2.value = true;
  });
  return readonly(isMounted2);
}

// node_modules/vooks/es/use-compitable.js
init_define_MZ_ZOOM_OPTIONS();
function useCompitable(reactive2, keys) {
  return computed(() => {
    for (const key of keys) {
      if (reactive2[key] !== void 0)
        return reactive2[key];
    }
    return reactive2[keys[keys.length - 1]];
  });
}

// node_modules/vooks/es/use-is-ios.js
init_define_MZ_ZOOM_OPTIONS();
var isIos = (typeof window === "undefined" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function useIsIos() {
  return isIos;
}

// node_modules/vooks/es/use-breakpoints.js
init_define_MZ_ZOOM_OPTIONS();
var defaultBreakpointOptions = {
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1536,
  "2xl": 1920
};
function createMediaQuery(screenWidth) {
  return `(min-width: ${screenWidth}px)`;
}
var mqlMap = {};
function useBreakpoints(screens = defaultBreakpointOptions) {
  if (!isBrowser)
    return computed(() => []);
  if (typeof window.matchMedia !== "function")
    return computed(() => []);
  const breakpointStatusRef = ref({});
  const breakpoints = Object.keys(screens);
  const updateBreakpoints = (e, breakpointName) => {
    if (e.matches)
      breakpointStatusRef.value[breakpointName] = true;
    else
      breakpointStatusRef.value[breakpointName] = false;
  };
  breakpoints.forEach((key) => {
    const breakpointValue = screens[key];
    let mql;
    let cbs;
    if (mqlMap[breakpointValue] === void 0) {
      mql = window.matchMedia(createMediaQuery(breakpointValue));
      if (mql.addEventListener) {
        mql.addEventListener("change", (e) => {
          cbs.forEach((cb) => {
            cb(e, key);
          });
        });
      } else if (mql.addListener) {
        mql.addListener((e) => {
          cbs.forEach((cb) => {
            cb(e, key);
          });
        });
      }
      cbs = /* @__PURE__ */ new Set();
      mqlMap[breakpointValue] = {
        mql,
        cbs
      };
    } else {
      mql = mqlMap[breakpointValue].mql;
      cbs = mqlMap[breakpointValue].cbs;
    }
    cbs.add(updateBreakpoints);
    if (mql.matches) {
      cbs.forEach((cb) => {
        cb(mql, key);
      });
    }
  });
  onBeforeUnmount(() => {
    breakpoints.forEach((breakpoint) => {
      const { cbs } = mqlMap[screens[breakpoint]];
      if (cbs.has(updateBreakpoints)) {
        cbs.delete(updateBreakpoints);
      }
    });
  });
  return computed(() => {
    const { value } = breakpointStatusRef;
    return breakpoints.filter((key) => value[key]);
  });
}
var use_breakpoints_default = useBreakpoints;

// node_modules/vooks/es/use-breakpoint.js
init_define_MZ_ZOOM_OPTIONS();
function useBreakpoint(screens) {
  if (!isBrowser)
    return computed(() => void 0);
  const breakpointsRef = screens !== void 0 ? use_breakpoints_default(screens) : use_breakpoints_default();
  return computed(() => {
    const { value } = breakpointsRef;
    if (value.length === 0)
      return void 0;
    return value[value.length - 1];
  });
}
var use_breakpoint_default = useBreakpoint;

// node_modules/vooks/es/use-keyboard.js
init_define_MZ_ZOOM_OPTIONS();
function useKeyboard(options = {}, enabledRef) {
  const state = reactive({
    ctrl: false,
    command: false,
    win: false,
    shift: false,
    tab: false
  });
  const { keydown, keyup } = options;
  const keydownHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = true;
        break;
      case "Meta":
        state.command = true;
        state.win = true;
        break;
      case "Shift":
        state.shift = true;
        break;
      case "Tab":
        state.tab = true;
        break;
    }
    if (keydown !== void 0) {
      Object.keys(keydown).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keydown[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const keyupHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = false;
        break;
      case "Meta":
        state.command = false;
        state.win = false;
        break;
      case "Shift":
        state.shift = false;
        break;
      case "Tab":
        state.tab = false;
        break;
    }
    if (keyup !== void 0) {
      Object.keys(keyup).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keyup[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const setup = () => {
    if (enabledRef === void 0 || enabledRef.value) {
      on("keydown", document, keydownHandler);
      on("keyup", document, keyupHandler);
    }
    if (enabledRef !== void 0) {
      watch(enabledRef, (value) => {
        if (value) {
          on("keydown", document, keydownHandler);
          on("keyup", document, keyupHandler);
        } else {
          off("keydown", document, keydownHandler);
          off("keyup", document, keyupHandler);
        }
      });
    }
  };
  if (hasInstance()) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      if (enabledRef === void 0 || enabledRef.value) {
        off("keydown", document, keydownHandler);
        off("keyup", document, keyupHandler);
      }
    });
  } else {
    setup();
  }
  return readonly(state);
}

// node_modules/vooks/es/use-is-safari.js
init_define_MZ_ZOOM_OPTIONS();
var isSafari = typeof window === "undefined" ? false : isIos || window.safari !== void 0;
function useIsSafari() {
  return isSafari;
}

// node_modules/vooks/es/index.js
init_define_MZ_ZOOM_OPTIONS();

export {
  useFalseUntilTruthy,
  use_memo_default,
  onFontsReady,
  useClickPosition,
  useClicked,
  useOsTheme,
  useMergedState,
  isMounted,
  useCompitable,
  useIsIos,
  use_breakpoints_default,
  use_breakpoint_default,
  useKeyboard,
  useIsSafari
};
//# sourceMappingURL=chunk-MG7ZFTBG.js.map
