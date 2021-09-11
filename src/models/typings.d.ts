declare namespace API {
  /**
   *
   * @export
   * @interface Action
   */
  export interface Action {
    /**
     *
     * @type {number}
     * @memberof Action
     */
    id?: number;
    /**
     * 项目ID
     * @type {number}
     * @memberof Action
     */
    projectId?: number;
    /**
     * 名字
     * @type {string}
     * @memberof Action
     */
    name?: string;
    /**
     * 操作描述
     * @type {string}
     * @memberof Action
     */
    description?: string;
    /**
     * 创建人ID
     * @type {number}
     * @memberof Action
     */
    createBy?: number;
    /**
     * 修改人ID
     * @type {number}
     * @memberof Action
     */
    updateBy?: number;
    /**
     *
     * @type {string}
     * @memberof Action
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof Action
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Action
     */
    deletedAt?: string;
  }
  /**
   *
   * @export
   * @interface ActionPagination
   */
  export interface ActionPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof ActionPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof ActionPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof ActionPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof ActionPagination
     */
    limit?: number;
    /**
     *
     * @type {Array<Action>}
     * @memberof ActionPagination
     */
    list?: Array<Action>;
  }
  /**
   *
   * @export
   * @interface ApiResponse
   */
  export interface ApiResponse {
    /**
     *
     * @type {number}
     * @memberof ApiResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof ApiResponse
     */
    msg?: string;
  }

  /**
   *
   * @export
   * @interface Menu
   */
  export interface Menu {
    /**
     *
     * @type {number}
     * @memberof Menu
     */
    id?: number;
    /**
     * 项目ID
     * @type {number}
     * @memberof Menu
     */
    projectId?: number;
    /**
     * 名字
     * @type {string}
     * @memberof Menu
     */
    name?: string;
    /**
     * 备注
     * @type {string}
     * @memberof Menu
     */
    desc?: string;
    /**
     * i18n主键
     * @type {string}
     * @memberof Menu
     */
    i18N?: string;
    /**
     * 排序值
     * @type {number}
     * @memberof Menu
     */
    sortOrder?: number;
    /**
     * 图标
     * @type {string}
     * @memberof Menu
     */
    icon?: string;
    /**
     * 路由，link、externalLink 二选其一
     * @type {string}
     * @memberof Menu
     */
    link?: string;
    /**
     * 访问路由
     * @type {string}
     * @memberof Menu
     */
    externalLink?: string;
    /**
     * 链接 target
     * @type {string}
     * @memberof Menu
     */
    target?: string;
    /**
     * 是否禁用菜单, 1:不禁用 2:禁用
     * @type {number}
     * @memberof Menu
     */
    disabled?: number;
    /**
     * 隐藏菜单, 1:不隐藏 2:隐藏
     * @type {number}
     * @memberof Menu
     */
    hide?: number;
    /**
     * 隐藏面包屑, 1:不隐藏 2:隐藏
     * @type {number}
     * @memberof Menu
     */
    hideInBreadcrumb?: number;
    /**
     * 父级 ID
     * @type {number}
     * @memberof Menu
     */
    parentId?: number;
    /**
     * 创建人ID
     * @type {number}
     * @memberof Menu
     */
    createBy?: number;
    /**
     * 修改人ID
     * @type {number}
     * @memberof Menu
     */
    updateBy?: number;
    /**
     *
     * @type {string}
     * @memberof Menu
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof Menu
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Menu
     */
    deletedAt?: string;
  }


  /**
   *
   * @export
   * @interface Project
   */
  export interface Project {
    /**
     *
     * @type {number}
     * @memberof Project
     */
    id: number;
    /**
     * 名字
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 描述
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * 创建人ID
     * @type {number}
     * @memberof Project
     */
    createBy?: number;
    /**
     * 修改人ID
     * @type {number}
     * @memberof Project
     */
    updateBy?: number;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    deletedAt?: string;
  }
  /**
   *
   * @export
   * @interface ProjectPagination
   */
  export interface ProjectPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof ProjectPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof ProjectPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof ProjectPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof ProjectPagination
     */
    limit?: number;
    /**
     *
     * @type {Array<Project>}
     * @memberof ProjectPagination
     */
    list?: Array<Project>;
  }


}
