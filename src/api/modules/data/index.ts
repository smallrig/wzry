import { API_HERO } from "@/api";
import { $LocaleHttp, $RemoteHttp } from "@/api/helper";

/** @description 获取版本信息 */
export const Version = () => $LocaleHttp.Get<VersionUpdate>("/version.json");

/** @description 获取计划 */
export const Todo = () => $LocaleHttp.Get<{ data: string }>("/todo.json");

/** @description 获取版本信息 */
// export const Version = () => $RemoteHttp.Get<VersionUpdate>("/version.json");

/** @description 获取公告 */
export const Notice = () => $RemoteHttp.Get<string>("/notice.json");

/** @description 获取计划 */
// export const Todo = () => $RemoteHttp.Get<string>("/todo.json");

/** @description 获取战绩 */
export const Team = () => $RemoteHttp.Get<string[][]>("/team.json");

/** @description 获取用户列表 */
export const User = () => $RemoteHttp.Get<User[]>("/user.json");

/** @description 获取英雄基础列表 */
export const HeroBasic = () => $RemoteHttp.Get<General[]>("/heroBasic.json");

/** @description 获取英雄图片列表 */
export const HeroImg = () => $RemoteHttp.Get<Hero.HeadImg[]>("/heroImg.json");

/** @description 获取英雄图集列表 */
export const HeroAtlas = () => $RemoteHttp.Get<Hero.Atlas[]>("/heroAtlas.json");

/** @description 获取英雄信息列表 */
export const Herodata = () => $RemoteHttp.Get<Hero.Data[]>("/heroData.json");

/**
 * @description 获取英雄语音列表
 * @param hero_name 英雄名
 */
export const Voice = async (hero_name: string) => {
  const pinyin = await API_HERO.getHeroPinyin(hero_name);
  return $RemoteHttp.Get<Hero.Voices[]>(`/voices/${pinyin}.json`);
};

/** @description 获取技能列表 */
export const Skill = () => $RemoteHttp.Get<Hero.Skill[]>("/skill.json");

/** @description 获取技能类型列表 */
export const Skilltype = () => $RemoteHttp.Get<Hero.SkillType[]>("/skillType.json");

/** @description 获取技能效果列表 */
export const Skilleffect = () => $RemoteHttp.Get<Hero.SkillEffect[]>("/skillEffect.json");

/** @description 获取皮肤列表 */
export const Skin = () => $RemoteHttp.Get<Hero.Skin[]>("/skin.json");

/** @description 获取皮肤类型列表 */
export const Skintype = () => $RemoteHttp.Get<Hero.SkinType[]>("/skinType.json");

/**
 * 铭文装备
 */
/** @description 获取装备列表 */
export const Equip = () => $RemoteHttp.Get<Equip.Data[]>("/equip.json");

/** @description 获取装备合成列表 */
export const EquipSynthetic = () => $RemoteHttp.Get<Equip.Synthetic[]>("/equipSynthetic.json");

/** @description 获取装备类型列表 */
export const Equiptype = () => $RemoteHttp.Get<General[]>("/equipType.json");

/** @description 获取装备效果列表 */
export const Equipeffect = () => $RemoteHttp.Get<Equip.Effect[]>("/equipEffect.json");

/** @description 获取铭文列表 */
export const Epigraph = () => $RemoteHttp.Get<Epigraph.Data[]>("/epigraph.json");

/** @description 获取铭文类型列表 */
export const Epigraphtype = () => $RemoteHttp.Get<General[]>("/epigraphType.json");

/** @description 获取铭文效果列表 */
export const Epigrapheffect = () =>
  $RemoteHttp.Get<Epigraph.EpigraphEffect[]>("/epigraphEffect.json");

/**
 *  杂项
 */
/** @description 获取职业列表 */
export const Professiontype = () => $RemoteHttp.Get<General[]>("/professionType.json");

/** @description 获取定位列表 */
export const Locationtype = () => $RemoteHttp.Get<General[]>("/locationType.json");

/** @description 获取特长列表 */
export const Specialtytype = () => $RemoteHttp.Get<General[]>("/specialtyType.json");

/** @description 获取时期列表 */
export const Periodtype = () => $RemoteHttp.Get<General[]>("/periodType.json");

/** @description 获取阵营列表 */
export const Camptype = () => $RemoteHttp.Get<General[]>("/campType.json");

/** @description 获取种族列表 */
export const RaceType = () => $RemoteHttp.Get<General[]>("/raceType.json");

/** @description 获取关系列表 */
export const Relationship = () => $RemoteHttp.Get<Hero.Relationship[]>("/relationship.json");
