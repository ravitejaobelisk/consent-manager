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
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'
var Root = styled('div')(
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
      ]
    )),
  fontStyles,
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var P = styled('p')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'],
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n']
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
      content = _a.content,
      backgroundColor = _a.backgroundColor,
      textColor = _a.textColor
    return React.createElement(
      Root,
      { innerRef: innerRef, backgroundColor: backgroundColor, textColor: textColor },
      React.createElement(P, null, content)
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(PureComponent)
export default Banner
var templateObject_1, templateObject_2
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFBO0FBQ2xDLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxJQUFNLElBQUksR0FBRyxNQUFNLENBQXdELEtBQUssQ0FBQyw2TkFBQSxNQUM3RSxFQUFVLDJEQUdFLEVBQThCLGNBQ25DLEVBQXdCLHFFQUlsQyxLQVJHLFVBQVUsRUFHRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBSWxDLENBQUE7QUFFRCxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDJJQUFBLHdFQUtwQixJQUFBLENBQUE7QUFTRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBaUJBLENBQUM7SUFkQyx1QkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUtRLEVBSlosc0JBQVEsRUFDUixvQkFBTyxFQUNQLG9DQUFlLEVBQ2Ysd0JBQ1ksQ0FBQTtRQUVkLE9BQU8sQ0FDTCxvQkFBQyxJQUFJLElBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTO1lBQzlFLG9CQUFDLENBQUMsUUFBRSxPQUFPLENBQUssQ0FDWCxDQUNSLENBQUE7SUFDSCxDQUFDO0lBZk0sa0JBQVcsR0FBRyxRQUFRLENBQUE7SUFnQi9CLGFBQUM7Q0FBQSxBQWpCRCxDQUFvQyxhQUFhLEdBaUJoRDtlQWpCb0IsTUFBTSJ9
