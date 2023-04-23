package cn.ultronxr.valorant.service;

import cn.ultronxr.valorant.bean.DTO.RiotAccountDTO;
import cn.ultronxr.valorant.bean.enums.RiotAccountCreateState;
import cn.ultronxr.valorant.bean.mybatis.bean.RiotAccount;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * @author Ultronxr
 * @date 2023/02/22 15:10
 * @description
 */
public interface RiotAccountService extends IService<RiotAccount> {

    RiotAccountCreateState create(RiotAccount account);

    //boolean update(RiotAccount account);

    /**
     * 查询拳头账户列表
     * @param accountDTO 查询条件
     * @return 返回的账户列表中不包含敏感信息（密码、token等）
     */
    Page<RiotAccount> queryAccount(RiotAccountDTO accountDTO);

}
