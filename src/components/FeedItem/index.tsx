import { View, Navigator } from "@tarojs/components";
import { IFeedItem } from "types/rss";
import './index.scss';
import Taro from "@tarojs/taro";


export interface FeedItemProps {
    data: IFeedItem,
}

export default function FeedItem(props: FeedItemProps) {
    const { data } = props;

    const handleClick = () => {
        Taro.navigateTo({
            url: '/pages/web-page/index?url=' + encodeURIComponent(data.link || ''),
        })
    }

    return <View className="feed-item" onClick={handleClick}>
        <View className="feed-item-title">
            {/* <Navigator url={data.link}>{data.title}</Navigator> */}
            {data.title}
        </View>
        <View className="feed-item-desc">
            {data.description?.substring(0, 100)}
        </View>
    </View>
}