/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CommentService } from "../comment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { CommentCreateInput } from "./CommentCreateInput";
import { CommentWhereInput } from "./CommentWhereInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentUpdateInput } from "./CommentUpdateInput";
import { Comment } from "./Comment";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CommentControllerBase {
  constructor(
    protected readonly service: CommentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Comment })
  @swagger.ApiBody({
    type: CommentCreateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CommentCreateInput): Promise<Comment> {
    return await this.service.create({
      data: {
        ...data,

        author: {
          connect: data.author,
        },

        commented: data.commented
          ? {
              connect: data.commented,
            }
          : undefined,

        listing: {
          connect: data.listing,
        },
      },
      select: {
        author: {
          select: {
            id: true,
          },
        },

        commented: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Comment] })
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Comment[]> {
    const args = plainToClass(CommentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        commented: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        commented: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: CommentUpdateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() data: CommentUpdateInput
  ): Promise<Comment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          author: {
            connect: data.author,
          },

          commented: data.commented
            ? {
                connect: data.commented,
              }
            : undefined,

          listing: {
            connect: data.listing,
          },
        },
        select: {
          author: {
            select: {
              id: true,
            },
          },

          commented: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          author: {
            select: {
              id: true,
            },
          },

          commented: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          listing: {
            select: {
              id: true,
            },
          },

          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/commentOn")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findManyCommentOn(
    @common.Req() request: Request,
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findCommentOn(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        commented: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/commentOn")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async connectCommentOn(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commentOn: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/commentOn")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async updateCommentOn(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commentOn: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/commentOn")
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async disconnectCommentOn(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commentOn: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
