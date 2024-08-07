/** Example lekko that controls the title based on a variable */
export function getTitle({
  enviro
}: {
  enviro: string;
}): string {
  if (enviro === "development") {
    return "DEVELOPMENT";
  } else if (enviro === "staging") {
    return "STAGING";
  } else if (enviro === "production") {
    return "PRODUCTION";
  } 
  return "UNDEFINED";
  
}
