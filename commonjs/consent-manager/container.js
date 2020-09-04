'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var events_1 = __importDefault(require('events'))
var react_1 = __importDefault(require('react'))
var banner_1 = __importDefault(require('./banner'))
var preference_dialog_1 = __importDefault(require('./preference-dialog'))
var cancel_dialog_1 = __importDefault(require('./cancel-dialog'))
var categories_1 = require('./categories')
var emitter = new events_1.default()
function openDialog() {
  emitter.emit('openDialog')
}
exports.openDialog = openDialog
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      categories_1.ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      categories_1.FUNCTIONAL_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      functionalDestinations.push(destination)
    } else {
      // Fallback to marketing
      marketingDestinations.push(destination)
    }
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    _loop_1(destination)
  }
  return {
    marketingDestinations: marketingDestinations,
    advertisingDestinations: advertisingDestinations,
    functionalDestinations: functionalDestinations
  }
}
var Container = function(props) {
  var _a = react_1.default.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  // const [showBanner, toggleBanner] = React.useState(true)
  var showBanner = true
  var _b = react_1.default.useState(false),
    isCancelling = _b[0],
    toggleCancel = _b[1]
  var banner = react_1.default.useRef(null)
  var preferenceDialog = react_1.default.useRef(null)
  var cancelDialog = react_1.default.useRef(null)
  var _c = normalizeDestinations(props.destinations),
    marketingDestinations = _c.marketingDestinations,
    advertisingDestinations = _c.advertisingDestinations,
    functionalDestinations = _c.functionalDestinations
  var handleBodyClick = function(e) {
    // Do nothing if no new implicit consent needs to be saved
    if (
      !props.isConsentRequired ||
      !props.implyConsentOnInteraction ||
      props.newDestinations.length === 0
    ) {
      return
    }
    // Ignore propogated clicks from inside the consent manager
    if (
      (banner.current && banner.current.contains(e.target)) ||
      (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
      (cancelDialog.current && cancelDialog.current.contains(e.target))
    ) {
      return
    }
    props.saveConsent(undefined, false)
  }
  var showDialog = function() {
    return toggleDialog(true)
  }
  react_1.default.useEffect(
    function() {
      if (props.allowAll) {
        var truePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
          acc[category] = true
          return acc
        }, {})
        props.setPreferences(truePreferences)
        props.saveConsent()
      }
    },
    [props.allowAll]
  )
  react_1.default.useEffect(
    function() {
      if (props.denyAll) {
        var falsePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
          acc[category] = false
          return acc
        }, {})
        props.setPreferences(falsePreferences)
        props.saveConsent()
      }
    },
    [props.denyAll]
  )
  react_1.default.useEffect(function() {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function() {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  // const onClose = () => {
  //   if (props.closeBehavior === undefined || props.closeBehavior === CloseBehavior.DISMISS) {
  //     return toggleBanner(false)
  //   }
  //   if (props.closeBehavior === CloseBehavior.ACCEPT) {
  //     return props.saveConsent()
  //   }
  //   if (props.closeBehavior === CloseBehavior.DENY) {
  //     const falsePreferences = Object.keys(props.preferences).reduce((acc, category) => {
  //       acc[category] = false
  //       return acc
  //     }, {})
  //     props.setPreferences(falsePreferences)
  //     return props.saveConsent()
  //   }
  //   // closeBehavior is a custom function
  //   const customClosePreferences = props.closeBehavior(props.preferences)
  //   props.setPreferences(customClosePreferences)
  //   props.saveConsent()
  //   return toggleBanner(false)
  // }
  var handleCategoryChange = function(category, value) {
    var _a
    props.setPreferences(((_a = {}), (_a[category] = value), _a))
  }
  var handleSave = function() {
    toggleDialog(false)
    props.saveConsent()
  }
  var handleCancel = function() {
    toggleDialog(false)
    // Only show the cancel confirmation if there's unconsented destinations
    if (props.newDestinations.length > 0) {
      toggleCancel(true)
    } else {
      props.resetPreferences()
    }
  }
  var handleCancelBack = function() {
    toggleDialog(true)
    toggleCancel(false)
  }
  var handleCancelConfirm = function() {
    toggleCancel(false)
    props.resetPreferences()
  }
  console.log(props.isConsentRequired, props.newDestinations, 'isConsentRequired:')
  var showBannerContent = showBanner && props.isConsentRequired && props.newDestinations.length > 0
  console.log(showBannerContent, 'showBannerContent::')
  console.log(props.showConsentByChoice, 'props.showConsentByChoice:')
  return react_1.default.createElement(
    'div',
    null,
    (showBannerContent || props.showConsentByChoice) &&
      react_1.default.createElement(banner_1.default, {
        innerRef: function(current) {
          return (banner = { current: current })
        },
        // onClose={onClose}
        // onChangePreferences={() => toggleDialog(true)}
        content: props.bannerContent,
        // subContent={props.bannerSubContent}
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor
      }),
    isDialogOpen &&
      react_1.default.createElement(preference_dialog_1.default, {
        customCategories: props.customCategories,
        destinations: props.destinations,
        preferences: props.preferences,
        innerRef: function(current) {
          return (preferenceDialog = { current: current })
        },
        onCancel: handleCancel,
        onSave: handleSave,
        onChange: handleCategoryChange,
        marketingDestinations: marketingDestinations,
        advertisingDestinations: advertisingDestinations,
        functionalDestinations: functionalDestinations,
        marketingAndAnalytics: props.preferences.marketingAndAnalytics,
        advertising: props.preferences.advertising,
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        disableChooseNo: props.disableChooseNo
      }),
    isCancelling &&
      react_1.default.createElement(cancel_dialog_1.default, {
        innerRef: function(current) {
          return (cancelDialog = { current: current })
        },
        onBack: handleCancelBack,
        onConfirm: handleCancelConfirm,
        title: props.cancelDialogTitle,
        content: props.cancelDialogContent
      })
  )
}
exports.default = Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQWlDO0FBQ2pDLGdEQUF5QjtBQUN6QixvREFBNkI7QUFDN0IsMEVBQWtEO0FBQ2xELGtFQUEwQztBQUMxQywyQ0FBNEU7QUFRNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFDbEMsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxnQ0FFQztBQXdDRCxTQUFTLHFCQUFxQixDQUFDLFlBQTJCO0lBQ3hELElBQU0scUJBQXFCLEdBQWtCLEVBQUUsQ0FBQTtJQUMvQyxJQUFNLHVCQUF1QixHQUFrQixFQUFFLENBQUE7SUFDakQsSUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxDQUFBOzRCQUVyQyxXQUFXO1FBQ3BCLElBQUksbUNBQXNCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUNoRSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUM7YUFBTSxJQUFJLGtDQUFxQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDdEUsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3pDO2FBQU07WUFDTCx3QkFBd0I7WUFDeEIscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3hDOztJQVJILEtBQTBCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWTtRQUFqQyxJQUFNLFdB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
