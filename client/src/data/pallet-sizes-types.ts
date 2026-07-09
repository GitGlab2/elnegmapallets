export interface PalletSize {
  slug: string;
  title: string;
  subtitle: string;
  dimensions: string;
  category: string;
  description: string;
  image: string;
  keywords: string[];
  specs: {
    length: number; // in mm
    width: number; // in mm
    height: number; // in mm
    weight: number; // in kg
    woodType: string;
    topBoards: string;
    bottomBoards: string;
    blocks: string;
  };
  loads: {
    static: number; // in kg
    dynamic: number; // in kg
    racking: number; // in kg
  };
  stuffing: {
    twentyFt: number;
    fortyFt: number;
    reefer40: number;
    layoutPattern: string;
  };
  applications: string[];
  features: string[];
}
