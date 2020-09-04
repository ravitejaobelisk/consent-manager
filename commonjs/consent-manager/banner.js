'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_emotion_1 = __importDefault(require('react-emotion'))
var font_styles_1 = __importDefault(require('./font-styles'))
var Root = react_emotion_1.default('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
        // const Content = styled('div')`
        //   a,
        //   button {
        //     display: inline;
        //     padding: 0;
        //     border: none;
        //     background: none;
        //     color: inherit;
        //     font: inherit;
        //     text-decoration: underline;
        //     cursor: pointer;
        //   }
        // `
      ]
    )),
  font_styles_1.default,
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
// const Content = styled('div')`
//   a,
//   button {
//     display: inline;
//     padding: 0;
//     border: none;
//     background: none;
//     color: inherit;
//     font: inherit;
//     text-decoration: underline;
//     cursor: pointer;
//   }
// `
var P = react_emotion_1.default('p')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'],
      [
        '\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'
        // const CloseButton = styled('button')`
        //   position: absolute;
        //   right: 8px;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   padding: 8px;
        //   border: none;
        //   background: none;
        //   color: inherit;
        //   font: inherit;
        //   font-size: 14px;
        //   line-height: 1;
        //   cursor: pointer;
        // `
      ]
    ))
)
var Banner = /** @class */ (function(_super) {
  __extends(Banner, _super)
  function Banner() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Banner.prototype.render = function() {
    var _a = this.props,
      innerRef = _a.innerRef,
      // onClose,
      // onChangePreferences,
      content = _a.content,
      // subContent,
      backgroundColor = _a.backgroundColor,
      textColor = _a.textColor
    return react_1.default.createElement(
      Root,
      { innerRef: innerRef, backgroundColor: backgroundColor, textColor: textColor },
      react_1.default.createElement(P, null, content)
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(react_1.PureComponent)
exports.default = Banner
var templateObject_1, templateObject_2
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLGdFQUFrQztBQUNsQyw4REFBc0M7QUFFdEMsSUFBTSxJQUFJLEdBQUcsdUJBQU0sQ0FBd0QsS0FBSyxDQUFDLDZOQUFBLE1BQzdFLEVBQVUsMkRBR0UsRUFBOEIsY0FDbkMsRUFBd0IscUVBSWxDO0lBRUQsaUNBQWlDO0lBQ2pDLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sSUFBSTtLQXRCQSxxQkFBVSxFQUdFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWUsQ0FJbEMsQ0FBQTtBQUVELGlDQUFpQztBQUNqQyxPQUFPO0FBQ1AsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIsTUFBTTtBQUNOLElBQUk7QUFFSixJQUFNLENBQUMsR0FBRyx1QkFBTSxDQUFDLEdBQUcsQ0FBQywySUFBQSx3RUFLcEI7SUFFRCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsSUFBSTtJQWZILENBQUE7QUEyQkQ7SUFBb0MsMEJBQW9CO0lBQXhEOztJQStCQSxDQUFDO0lBNUJDLHVCQUFNLEdBQU47UUFDUSxJQUFBLGVBUVEsRUFQWixzQkFBUTtRQUNSLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsb0JBQU87UUFDUCxjQUFjO1FBQ2Qsb0NBQWUsRUFDZix3QkFDWSxDQUFBO1FBRWQsT0FBTyxDQUNMLDhCQUFDLElBQUksSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFFNUUsOEJBQUMsQ0FBQyxRQUFFLE9BQU8sQ0FBSyxDQVdiLENBQ1IsQ0FBQTtJQUNILENBQUM7SUE3Qk0sa0JBQVcsR0FBRyxRQUFRLENBQUE7SUE4Qi9CLGFBQUM7Q0FBQSxBQS9CRCxDQUFvQyxxQkFBYSxHQStCaEQ7a0JBL0JvQixNQUFNIn0=
