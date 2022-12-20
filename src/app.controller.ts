import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Transaction } from '@meshsdk/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    const tx = new Transaction({ initiator: wallet })
      .sendLovelace(
        'addr_test1vpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0c7e4cxr',
        '1000000'
      )
      .sendLovelace(
        'ANOTHER ADDRESS HERE',
        '1500000'
      )
    ;

    // const unsignedTx = tx.build().then(()=>{
    //     wallet.signTx(unsignedTx).then
    // });
    // const signedTx = await wallet.signTx(unsignedTx);
    // const txHash = await wallet.submitTx(signedTx);

    return this.appService.getHello();
  }
}
