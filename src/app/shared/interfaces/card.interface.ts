import {LogoUrl} from './card-list-response.interface';

export interface CardInterface {
  id: number;
  name: string;
  partner_level_id: number;
  partner_level_name: string;
  partner_level_color: string;
  partner_budget: string;
  logo_id: number;
  partner_events_invoiced: string;
  partner_events_not_invoiced?: string;
  logo_url: LogoUrl;
}
