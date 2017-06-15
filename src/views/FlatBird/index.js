import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import colors from 'config/colors';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {RightSide, Download, HowAbout, Horizontal, Strong, Circle, Text} from './styles';

@inject('store')
@observer
class ThoughtsPage extends Component {

  render() {

    return (
      <RightSide backgroundColor="#333959">
        <Helmet
          title="FlatBird"
          meta={getMeta({
            title: "FlatBird"
          })
          }
        />

        <Strong spaced>
          Introducing FlatBird
        </Strong>

        <Text className="animated fadeIn">
          Cannot stand Twitter's new round design? I know right!
        </Text>

        <Horizontal>
          <Circle>
            So many rounded objects
          </Circle>

          <Strong >
            strong fonts, and YUGE fontsizes
          </Strong>
        </Horizontal>

        <HowAbout>
          How about a Chrome extension that will normalize most of the changes?
        </HowAbout>

        <Horizontal>
          <Download target="_blank" href="https://chrome.google.com/webstore/detail/flatbird/faioifdgpccbhekmggeenehaogakjgjd">
             Chrome extension
          </Download>

          <Download target="_blank" href="https://userstyles.org/styles/144004/flatbird">
            Stylish userstyle
          </Download>

          <Download target="_blank" href="https://gist.github.com/kitze/ae66f498db8714787e37ce1cd7dc1da7">
            Raw CSS
          </Download>

        </Horizontal>


      </RightSide>
    )
  }
}

export default ThoughtsPage;