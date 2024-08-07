/** Example feature flag, enabled in development environments */

export function getExampleFlag({ env }: { env: string }): boolean {
  if (env === "development") {
    return true;
  }
  return false;
}

/** Example lekko that controls which LLM users interact with */
export function getExampleModel({
  isAdmin,
  plan,
}: {
  isAdmin: boolean;
  plan: string;
}): string {
  if (isAdmin) {
    return "anthropic-claude3-opus";
  } else if (plan === "team" || plan === "enterprise") {
    return "openai-chatgpt4-o";
  }
  return "openai-chatgpt3.5-turbo";
}

/** Example lekko that controls sampling rate based on contextual factors */
export function getExampleSampleRate({
  env,
  load,
  msgType,
  throttle,
}: {
  env: string;
  load: number;
  msgType: string;
  throttle: boolean;
}): number {
  if (env === "staging") {
    return 1;
  } else if (msgType === "critical") {
    return 1;
  } else if (load > 0.75 || throttle) {
    return 0.3;
  }
  return 0.75;
}

