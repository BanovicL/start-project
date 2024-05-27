import * as contentstackManagement from '@contentstack/management';
import { API_KEY, MANAGEMENT_TOKEN, ENVIRONMENT, DELIVERY_TOKEN } from '../contants/content-stack';
import Contentack from "contentstack";

export default class BaseSDKClient {

    static contentstackManagementStack = contentstackManagement.client(
        { 
            baseURL: "https://eu-api.contentstack.com/v3"
        }).stack({ api_key: API_KEY, management_token: MANAGEMENT_TOKEN});

    static contentstackDeliveryStack = Contentack.Stack({ api_key: API_KEY, delivery_token: DELIVERY_TOKEN, environment: ENVIRONMENT, region: Contentack.Region.EU });

}