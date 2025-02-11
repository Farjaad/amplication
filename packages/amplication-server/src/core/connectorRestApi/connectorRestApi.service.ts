import { EnumBlockType } from "../../enums/EnumBlockType";
import { BlockTypeService } from "../block/blockType.service";
import {
  ConnectorRestApi,
  CreateConnectorRestApiArgs,
  FindManyConnectorRestApiArgs,
} from "./dto/";
import { UpdateBlockArgs } from "../block/dto/UpdateBlockArgs";
import { DeleteBlockArgs } from "../block/dto/DeleteBlockArgs";

export class ConnectorRestApiService extends BlockTypeService<
  ConnectorRestApi,
  FindManyConnectorRestApiArgs,
  CreateConnectorRestApiArgs,
  UpdateBlockArgs /**@todo: Complete Update Operation */,
  DeleteBlockArgs
> {
  blockType = EnumBlockType.ConnectorRestApi;
}
