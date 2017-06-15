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

        <Download target="_blank" href="https://chrome.google.com/webstore/detail/flatbird/faioifdgpccbhekmggeenehaogakjgjd">
          Download FlatBird
        </Download>

      </RightSide>
    )
  }
}

export default ThoughtsPage;