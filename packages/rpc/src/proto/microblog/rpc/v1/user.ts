// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: proto/microblog/rpc/v1/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "microblog.rpc.v1";

export interface Users {
  id: string;
  username: string;
}

export interface GetUsersRequest {
  ids: string[];
}

export interface GetUsersResponse {
  users: Users[];
}

function createBaseUsers(): Users {
  return { id: "", username: "" };
}

export const Users: MessageFns<Users> = {
  encode(message: Users, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Users {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Users {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
    };
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create(base?: DeepPartial<Users>): Users {
    return Users.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Users>): Users {
    const message = createBaseUsers();
    message.id = object.id ?? "";
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseGetUsersRequest(): GetUsersRequest {
  return { ids: [] };
}

export const GetUsersRequest: MessageFns<GetUsersRequest> = {
  encode(message: GetUsersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUsersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersRequest {
    return { ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: GetUsersRequest): unknown {
    const obj: any = {};
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUsersRequest>): GetUsersRequest {
    return GetUsersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUsersRequest>): GetUsersRequest {
    const message = createBaseGetUsersRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetUsersResponse(): GetUsersResponse {
  return { users: [] };
}

export const GetUsersResponse: MessageFns<GetUsersResponse> = {
  encode(message: GetUsersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.users) {
      Users.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.users.push(Users.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => Users.fromJSON(e)) : [] };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => Users.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetUsersResponse>): GetUsersResponse {
    return GetUsersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUsersResponse>): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => Users.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
