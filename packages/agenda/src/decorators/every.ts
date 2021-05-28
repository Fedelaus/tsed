import {Store, useDecorators} from "@tsed/core";
import {Define} from "./define";
import {AgendaStore, EveryOptions} from "../interfaces/AgendaStore";

export function Every(interval: string, options: EveryOptions = {}): MethodDecorator {
  return useDecorators(Define(options), (target: any, propertyKey: string) => {
    const store: AgendaStore = {
      every: {
        [propertyKey]: {...options, interval}
      }
    };
    Store.from(target).merge("agenda", store);
  });
}
