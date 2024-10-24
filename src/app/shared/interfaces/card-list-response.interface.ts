export interface CardListResponseInterface {
  partner_levels: PartnerLevel[];
  partners: Partner[];
}

export interface PartnerLevel {
  id: number;
  name: string;
  color: string;
}

export interface Partner {
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

export interface LogoUrl {
  src: string;
  srcset: string;
}
