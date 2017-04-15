import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import {merge} from 'ramda'
import CustomColors from './Colors'
const colors = require('material-ui/styles/colors');

const customTheme = {
  palette: {
    primary1Color: CustomColors.secondaryGreen,
    canvas: 'rgb(238, 238, 240)'
  }
}
const theme = merge(lightBaseTheme, customTheme)

export default theme