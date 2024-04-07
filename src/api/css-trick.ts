// import Taro from "@tarojs/taro";
import cssTrickData from './data';
import { IFeedItem } from 'types/rss';
import xml2json from '../lib/xml2json';

/**
 * 获取 CSS Trick RSS 数据
 */
export const getCSSTrickRSSData = async () => {
    // return Taro.request({
    //     url: 'https://css-tricks.com/feed/',
    // });

    return new Promise<IFeedItem[]>((resolve, reject) => {
        // const parser = new RssParser(); 
        const str = cssTrickData;
        const parsedData = xml2json(str).rss.channel.item as IFeedItem[];
        const normalizedData = parsedData.map(item => {
            return Object.keys(item).reduce((all, cur) => {
                const curText = item[cur].text;
                return {
                    ...all,
                    [cur]: curText ? curText : item
                }
            }, {});
        })
        resolve(normalizedData);
    })
}