import { Transaction } from '../../types';
import { detectIdRegistry, generateIdRegistryContext } from './idRegistry';
import farcasterChangeRecoveryFor0x07c03c85 from '../../test/transactions/farcaster-changeRecoveryFor-0x07c03c85.json';
import farcasterTransfer0x9344e0d0 from '../../test/transactions/farcaster-transfer-0x9344e0d0.json';
import catchall0xc35c01ac from '../../test/transactions/catchall-0xc35c01ac.json';

describe('IdRegistry', () => {
  describe('changeRecoveryAddressFor', () => {
    it('Should detect transaction', () => {
      const match = detectIdRegistry(
        farcasterChangeRecoveryFor0x07c03c85 as Transaction,
      );
      expect(match).toBe(true);
    });

    it('Should not detect transaction', () => {
      const match = detectIdRegistry(catchall0xc35c01ac as Transaction);
      expect(match).toBe(false);
    });

    it('Should detect transaction', () => {
      const match = detectIdRegistry(
        farcasterChangeRecoveryFor0x07c03c85 as Transaction,
      );
      expect(match).toBe(true);
    });

    it('Should generate context', () => {
      const transaction = generateIdRegistryContext(
        farcasterChangeRecoveryFor0x07c03c85 as Transaction,
      );
      expect(transaction.context.variables.owner['value']).toBe(
        '0x71414dDe8eeEa49e916D77D1633366E602785ea4',
      );
      expect(transaction.context.variables.recoveryAddress['value']).toBe(
        '0x6BA0CADf5D997c6b3EE62bBE55594456B4E80039',
      );
    });
  });

  describe('transfer', () => {
    it('Should detect transaction', () => {
      const match = detectIdRegistry(
        farcasterTransfer0x9344e0d0 as Transaction,
      );
      expect(match).toBe(true);
    });

    it('Should generate context', () => {
      const transaction = generateIdRegistryContext(
        farcasterTransfer0x9344e0d0 as Transaction,
      );
      expect(transaction.context.variables.owner['value']).toBe(
        '0x3111bb74979c77969282660d299fff3edfd363e3',
      );
      expect(transaction.context.variables.to['value']).toBe(
        '0xBC04652B7657E9a7C2778f04B425683955DE88C1',
      );
    });
  });
});
