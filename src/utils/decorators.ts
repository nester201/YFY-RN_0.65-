import { logger } from './logger';

export function processErrors(func?: Function) {
  return function (descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    if (typeof originalMethod === 'function') {
      descriptor.value = async function (...rest: any[]) {
        try {
          return await originalMethod.call(this, ...rest);
        } catch (error) {
          logger.error(error);
          func && func(error);
        }
      };
    }
    return descriptor;
  };
}
