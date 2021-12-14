export declare type MenuInfoSchemaType = {
  id?: string; // 아이디
  parentId?: string; // 메뉴 부모 아이디
  title?: string; // 메뉴 타이틀
  name?: string; // 메뉴명
  path?: string; // 메뉴 URL 경로명
  level?: number; // 메뉴 레벨
  sortSeq?: number; // 순번
  useYn?: string; // 사용여부
  sysCreDate?: string; // 등록일자
  sysCreUserId?: string; // 등록자
  sysUpdDate?: string; // 수정일자
  sysUpdUserId?: string; // 수정일
};
