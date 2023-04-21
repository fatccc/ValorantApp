package cn.ultronxr.valorant.bean.enums;

import lombok.Getter;

/**
 * @author Ultronxr
 * @date 2023/04/21 22:58:00
 * @description 添加拳头账号时的状态码
 */
@Getter
public enum RiotAccountCreateState {
    OK(1, "添加成功。")
    ,DUPLICATE(0, "账号已存在，请勿重复添加！")
    ,AUTH_FAILURE(-1, "账号密码验证失败！")
    ;


    private final int code;
    private final String msg;

    RiotAccountCreateState(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

}
