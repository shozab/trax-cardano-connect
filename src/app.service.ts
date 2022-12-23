import { Injectable } from '@nestjs/common';
import { Transaction, ForgeScript } from '@meshsdk/core';
import type { Asset } from '@meshsdk/core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world!';
  }

  sendAsset(): string {
    
    // prepare forgingScript
    const usedAddress = await wallet.getUsedAddresses();
    const address = usedAddress[0];
    const forgingScript = ForgeScript.withOneSignature(address);
    
    const tx = new Transaction({ initiator: wallet });
    
    // burn asset#1
    const asset1: Asset = {
      unit: '64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e',
      quantity: '1',
    };
    tx.burnAsset(forgingScript, asset1);
    
    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);

    return 'Hello world!';
  }
}
