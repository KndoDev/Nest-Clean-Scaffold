import { Injectable } from '@/common/injector/injectable';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wososrld!';
  }
}
