import { Transaction } from '../types';
import { detectTokenApproval } from './tokenApproval';
import tokenApproval0x567130ba from '../test/transactions/tokenApproval-0x567130ba.json';
import tokenApproval0x06f15d49 from '../test/transactions/tokenApproval-0x06f15d49.json';
import tokenApproval0xa0c2a425 from '../test/transactions/tokenApproval-0xa0c2a425.json';
import catchall0xc35c01ac from '../test/transactions/catchall-0xc35c01ac.json';

describe('Token Approval', () => {
  it('Should detect token approval transaction', () => {
    const tokenApproval1 = detectTokenApproval(
      tokenApproval0x567130ba as Transaction,
    );
    expect(tokenApproval1).toBe(true);

    const tokenApproval2 = detectTokenApproval(
      tokenApproval0x06f15d49 as Transaction,
    );
    expect(tokenApproval2).toBe(true);

    const tokenApproval3 = detectTokenApproval(
      tokenApproval0xa0c2a425 as Transaction,
    );
    expect(tokenApproval3).toBe(true);
  });

  it('Should not detect token approval transaction', () => {
    const tokenApproval1 = detectTokenApproval(
      catchall0xc35c01ac as Transaction,
    );
    expect(tokenApproval1).toBe(false);
  });
});
