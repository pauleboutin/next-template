

/** Example lekko that controls the title based on a variable */
export function getTitle({ enviro }: { enviro: string }): string {
  if (enviro === "development") {
    return "development";
  } else if (enviro === "staging") {
    return "staging";
  } else if (enviro === "production") {
    return "production";
  } else if (enviro === "preview") {
    return "preview";
  } else if (enviro === "canary") {
    return "canary";
  } else if (enviro === "undefined") {
    return "undefined";
  }
  return "NO_ENVIRONMENT_DECLARED";
}
type Merchant = {
  DeliveryRadius: number;
  Hours: string;
  ParkingLocation: string;
  PrepTime: number;
  Sources: string[];
};

export function getMerchant({merchantId}: {merchantId: string}): Merchant {
  if (merchantId === "burger-central"){
    return {
      DeliveryRadius:  15,
      Hours:           "9:00AM - 5:00PM",
      ParkingLocation: "lot_5",
      PrepTime:        15,
      Sources: ["uber_eats", "doordash"]
    };
  }
  /* else /*if (merchantId === "huangshen-home")*/ 
    return {
      DeliveryRadius:  15,
      Hours:           "9:00AM - 6:00PM",
      ParkingLocation: "lot_5",
      PrepTime:        15,
      Sources: ["uber_eats", "doordash", "native"]
    };
  }