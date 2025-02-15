import { Transaction } from '../types';
import { detectERC20Swap } from './erc20Swap';
import erc20Swap0x8cb66698 from '../test/transactions/erc20Swap-0x8cb66698.json';
import erc20SwapNot0xb376ca2f from '../test/transactions/erc20Swap-not-0xb376ca2f.json';
import erc20Swap0xd55dc9b2 from '../test/transactions/erc20Swap-0xd55dc9b2.json';
import catchall0xc35c01ac from '../test/transactions/catchall-0xc35c01ac.json';

describe('ERC20 Swap', () => {
  it('Should detect ERC20 Swap transaction', () => {
    const isERC20Swap = detectERC20Swap(erc20Swap0x8cb66698 as Transaction);
    expect(isERC20Swap).toBe(true);

    const isERC20Swap1 = detectERC20Swap(erc20Swap0xd55dc9b2 as Transaction);
    expect(isERC20Swap1).toBe(true);
  });

  it('Should not detect as ERC20 Swap transaction', () => {
    const isERC20Swap1 = detectERC20Swap(erc20SwapNot0xb376ca2f as Transaction);
    expect(isERC20Swap1).toBe(false);

    const isERC20Swap2 = detectERC20Swap(catchall0xc35c01ac as Transaction);
    expect(isERC20Swap2).toBe(false);
  });
});
