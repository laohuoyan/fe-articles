import { Component, PropsWithChildren } from 'react'
import { ScrollView } from '@tarojs/components'
import { observer } from 'mobx-react'
import { IFeedItem } from '../../../types/rss';
import './index.scss'
import { getCSSTrickRSSData } from '../../api/css-trick'
import FeedItem from '../../components/FeedItem';

interface PageStateProps {
}

interface PageState {
  cssTrickFeedItems: IFeedItem[],
}

interface Index {
  props: PageStateProps;
  state: PageState;
}

@observer
class Index extends Component<PropsWithChildren> {
  state = {
    cssTrickFeedItems: [] as IFeedItem[],
  }

  componentDidMount () {
    getCSSTrickRSSData().then(data => {
      this.setState({
        cssTrickFeedItems: data,
      })
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  renderItems() {
    const { cssTrickFeedItems } = this.state;
    return cssTrickFeedItems.map((item) => {
      return <FeedItem data={item} />;
    });
  }

  render () {
    return (
      <ScrollView>
        {this.renderItems()}
      </ScrollView>
    )
  }
}

export default Index
