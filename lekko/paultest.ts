

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
