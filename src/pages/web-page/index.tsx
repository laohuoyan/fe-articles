import {  WebView } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function WebPage() {
    const params = Taro.getCurrentInstance()?.router?.params
    if (!params) return null;
    const url = decodeURIComponent(params.url || '');
    console.log('params ->', url);
    
    return <WebView src={url} />
}