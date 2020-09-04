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
  fontStyles,
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
var P = styled('p')(
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFBO0FBQ2xDLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxJQUFNLElBQUksR0FBRyxNQUFNLENBQXdELEtBQUssQ0FBQyw2TkFBQSxNQUM3RSxFQUFVLDJEQUdFLEVBQThCLGNBQ25DLEVBQXdCLHFFQUlsQztJQUVELGlDQUFpQztJQUNqQyxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLElBQUk7S0F0QkEsVUFBVSxFQUdFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWUsQ0FJbEMsQ0FBQTtBQUVELGlDQUFpQztBQUNqQyxPQUFPO0FBQ1AsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIsTUFBTTtBQUNOLElBQUk7QUFFSixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDJJQUFBLHdFQUtwQjtJQUVELHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixJQUFJO0lBZkgsQ0FBQTtBQTJCRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBK0JBLENBQUM7SUE1QkMsdUJBQU0sR0FBTjtRQUNRLElBQUEsZUFRUSxFQVBaLHNCQUFRO1FBQ1IsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixvQkFBTztRQUNQLGNBQWM7UUFDZCxvQ0FBZSxFQUNmLHdCQUNZLENBQUE7UUFFZCxPQUFPLENBQ0wsb0JBQUMsSUFBSSxJQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsU0FBUztZQUU1RSxvQkFBQyxDQUFDLFFBQUUsT0FBTyxDQUFLLENBV2IsQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQTdCTSxrQkFBVyxHQUFHLFFBQVEsQ0FBQTtJQThCL0IsYUFBQztDQUFBLEFBL0JELENBQW9DLGFBQWEsR0ErQmhEO2VBL0JvQixNQUFNIn0=
