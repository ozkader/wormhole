/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface DeliveryProviderGettersInterface extends utils.Interface {
  functions: {
    "assetConversionBuffer(uint16)": FunctionFragment;
    "chainId()": FunctionFragment;
    "coreRelayer()": FunctionFragment;
    "deliverGasOverhead(uint16)": FunctionFragment;
    "gasPrice(uint16)": FunctionFragment;
    "isInitialized(address)": FunctionFragment;
    "maximumBudget(uint16)": FunctionFragment;
    "nativeCurrencyPrice(uint16)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "rewardAddress()": FunctionFragment;
    "targetChainAddress(uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assetConversionBuffer"
      | "chainId"
      | "coreRelayer"
      | "deliverGasOverhead"
      | "gasPrice"
      | "isInitialized"
      | "maximumBudget"
      | "nativeCurrencyPrice"
      | "owner"
      | "pendingOwner"
      | "rewardAddress"
      | "targetChainAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetConversionBuffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "coreRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deliverGasOverhead",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maximumBudget",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeCurrencyPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetChainAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetConversionBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "coreRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deliverGasOverhead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumBudget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeCurrencyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetChainAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DeliveryProviderGetters extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeliveryProviderGettersInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    assetConversionBuffer(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { tolerance: number; toleranceDenominator: number }
    >;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    coreRelayer(overrides?: CallOverrides): Promise<[string]>;

    deliverGasOverhead(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gasPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maximumBudget(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nativeCurrencyPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    rewardAddress(overrides?: CallOverrides): Promise<[string]>;

    targetChainAddress(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  assetConversionBuffer(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, number] & { tolerance: number; toleranceDenominator: number }
  >;

  chainId(overrides?: CallOverrides): Promise<number>;

  coreRelayer(overrides?: CallOverrides): Promise<string>;

  deliverGasOverhead(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gasPrice(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInitialized(
    impl: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maximumBudget(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nativeCurrencyPrice(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  rewardAddress(overrides?: CallOverrides): Promise<string>;

  targetChainAddress(
    targetChain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    assetConversionBuffer(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { tolerance: number; toleranceDenominator: number }
    >;

    chainId(overrides?: CallOverrides): Promise<number>;

    coreRelayer(overrides?: CallOverrides): Promise<string>;

    deliverGasOverhead(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maximumBudget(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativeCurrencyPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    rewardAddress(overrides?: CallOverrides): Promise<string>;

    targetChainAddress(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    assetConversionBuffer(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    coreRelayer(overrides?: CallOverrides): Promise<BigNumber>;

    deliverGasOverhead(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maximumBudget(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativeCurrencyPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    rewardAddress(overrides?: CallOverrides): Promise<BigNumber>;

    targetChainAddress(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetConversionBuffer(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coreRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deliverGasOverhead(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maximumBudget(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativeCurrencyPrice(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetChainAddress(
      targetChain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}