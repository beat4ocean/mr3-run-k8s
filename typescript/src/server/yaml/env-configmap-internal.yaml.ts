import * as state from '../state';
import { expand } from '../util-fs';

export function build(s: state.T) {
  const env = s.env;
  return {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      name: env.consts.name.envConfigMapInternal,
      namespace: env.basics.namespace
    },
    data: {
      [env.consts.name.envScript]: expand('./server/resources/env-internal.sh', s)
    }
  };
}
