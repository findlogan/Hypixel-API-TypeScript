/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProfilesByPlayerBase {
    success: boolean;
    profiles: ProfilesByPlayerProfiles[];
}

export interface ProfilesByPlayerProfiles {
    profile_id: string;
    members: Record<string, {
        rift: {
            village_plaza: {
                murder: any;
                barry_center: any;
                cowboy: any;
                barter_bank: any;
                lonely: any;
                seraphine: any
            };
            wither_cage: any;
            black_lagoon: any;
            dead_cats: any;
            wizard_tower: any;
            enigma: any;
            gallery: any;
            west_village: {
                crazy_kloon: {
                    selected_colors: any;
                } | null;
                mirrorverse: any;
                kat_house: any;
                glyphs: any
            } | null;
            wyld_woods: any;
            castle: any;
            access: any;
            dreadfarm: any;
        } | null;
        player_data: {
            visited_zones: string[];
            last_death: number;
            active_effects: any[];
            death_count: number;
            visited_modes: string[];
            unlocked_coll_tiers: string[];
        } | null;
        accessory_bag_storage: {
            tuning: any;
            highest_magical_power: number;
        } | null;
        leveling: {
            experience: number;
            completions: Record<string, any>;
            completed_tasks: string[];
            migrated: boolean;
        } | null;
        jacobs_contest: {
            medals_inv: any;
            perks: any;
            contests: any;
        } | null;
        currencies: {
            coin_purse: string;
        } | null;
        dungeons: {
            dungeon_types: {
                catacombs: {
                    fastest_time_s: any;
                    most_damage_healer: any;
                    mobs_killed: any;
                    watcher_kills: any;
                    most_damage_mage: any;
                    fastest_time: any;
                    most_damage_archer: any;
                    best_score: any;
                    fastest_time_s_plus: any;
                    most_healing: any;
                    most_mobs_killed: any;
                    most_damage_berserk: any;
                    most_damage_tank: any;
                    tier_completions: {
                        0: number;
                        1: number;
                        2: number;
                        3: number;
                        4: number;
                        5: number;
                        6: number;
                        7: number;
                    };
                };
                master_catacombs: {
                    tier_completions: any;
                };
            };
            player_classes: {
                healer: DungeonClass;
                mage: DungeonClass;
                berserk: DungeonClass;
                archer: DungeonClass;
                tank: DungeonClass;
            };
            dungeon_journal: {
                unlocked_journals: any[];
            };
            treasures: any;
        } | null;
        profile: {
            profile: {
                first_join: number;
                coop_invitation: {
                    timestamp: number;
                    invited_by: string;
                    confirmed: boolean;
                    confirmed_timestamp: number;
                };
            };
        } | null;
        player_id: string;
        nether_island_player_data: {
            kuudra_completed_tiers: any;
            dojo: any;
            abiphone: {
                contact_data: any;
                games: any;
                operator_chip: any;
            }
            matriarch: any;
            kuudra_party_finder: {
                search_settings: any;
                group_builder: {
                    tier: string;
                    note: string;
                    combat_level_required: number;
                }
            }
        } | null;
        mining_core: {
            nodes: any;
        } | null;
        pets_data: {
            pets: any[];
        } | null;
        bestiary: {
            migrated_stats: boolean;
            migration: boolean;
            kills: any;
            milestone: any;
        } | null;
        quests: any;
        player_stats: {
            highest_critical_damage: number;
            pets: {
                milestone: {
                    ores_mined: number;
                };
            };
            deaths: {
                total: number;
                void: number;
                fall: number;
            };
            auctions: {
                bids: number;
                highest_bid: number;
                won: number;
                total_bought: {
                    RARE: number;
                };
                gold_spent: number;
            };
            highest_damage: number;
        } | null;
        forge: {
            forge_processes: any;
        } | null;
        fairy_soul: {
            total_collected: number;
            unspent_souls: number;
        } | null;
        trophy_fish: {
            rewards: any;
        } | null;
        objectives: {
            collect_log: ObjectiveStatus;
            talk_to_guide: ObjectiveStatus;
            public_island: ObjectiveStatus;
            explore_hub: ObjectiveStatus;
            explore_village: ObjectiveStatus;
            talk_to_librarian: ObjectiveStatus;
            talk_to_farmer: ObjectiveStatus;
            talk_to_blacksmith: ObjectiveStatus;
            talk_to_lumberjack: ObjectiveStatus;
            talk_to_event_master: ObjectiveStatus;
            talk_to_auction_master: ObjectiveStatus;
            talk_to_banker: ObjectiveStatus;
            talk_to_fairy: ObjectiveStatus;
            talk_to_fisherman_1: ObjectiveStatus;
            talk_to_carpenter: ObjectiveStatus;
            talk_to_artist_1: ObjectiveStatus;
            paint_canvas: ObjectiveStatus;
            talk_to_pet_collector: ObjectiveStatus;
            talk_to_pet_sitter: ObjectiveStatus;
            deposit_coins: ObjectiveStatus;
            talk_to_lazy_miner: ObjectiveStatus;
            increase_mining_skill_5: ObjectiveStatus;
            talk_to_telekinesis_applier: ObjectiveStatus;
            warp_deep_caverns: ObjectiveStatus;
            talk_to_lapis_miner: ObjectiveStatus;
            talk_to_lift_operator: ObjectiveStatus;
            talk_to_farmhand_1: ObjectiveStatus;
            increase_farming_skill_5: ObjectiveStatus;
            craft_wheat_minion: ObjectiveStatus;
            warp_mushroom_desert: ObjectiveStatus;
            collect_farming_resources_2: ObjectiveStatusWithItems;
            collect_farm_animal_resources_2: ObjectiveStatus;
            reach_lapis_quarry: ObjectiveStatus;
            collect_lapis: ObjectiveStatusWithItems;
            reach_pigmens_den: ObjectiveStatus;
            collect_redstone: ObjectiveStatusWithItems;
            reach_slimehill: ObjectiveStatus;
            collect_emerald: ObjectiveStatusWithItems;
            reach_diamond_reserve: ObjectiveStatus;
            collect_diamond: ObjectiveStatusWithItems;
            reach_obsidian_sanctuary: ObjectiveStatus;
            collect_obsidian: ObjectiveStatus;
            kill_danger_mobs: ObjectiveStatus;
            chop_tree: ObjectiveStatus;
            talk_to_lumberjack_2: ObjectiveStatus;
            increase_foraging_skill: ObjectiveStatus;
            warp_foraging_islands: ObjectiveStatus;
            craft_workbench: ObjectiveStatus;
            hub_talk_to_wizard: ObjectiveStatus;
            tutorial: string[];
        } | null;
        slayer: {
            slayer_bosses: {
                zombie: SlayerBossClaimed;
                spider: SlayerBossClaimed;
                wolf: SlayerBossClaimed;
                enderman: SlayerBossClaimed;
                blaze: SlayerBossClaimed;
                vampire: SlayerBossClaimed;
            }
        } | null;
    }>;
    cute_name: string | null;
    selected: boolean | null;
    community_upgrades: {
        upgrade_states: PlayerProfileCommunityUpgradeStatusItem[];
        currently_upgrading: {
            upgrade: string;
            new_tier: number;
            started_ms: number;
            who_started: string;
        } | null;
    } | null;
    banking?: {
        balance: string;
        transactions: Transaction[];
    } | null;
    game_mode: string | null;
}

export interface SlayerBossClaimed {
    claimed_levels: any;
}

export interface PlayerProfileCommunityUpgradeStatusItem {
    upgrade: string;
    tier: number;
    started_ms: number;
    started_by: string;
    claimed_ms: number;
    claimed_by: string;
    fasttracked: boolean;
}

export interface ObjectiveStatus {
    status: string;
    progress: number;
    completed_at: number;
}

export interface Transaction {
    amount: number;
    timestamp: number;
    action: string;
    initiator_name: string;
}

export interface Banking {
    balance: number;
    transactions: Transaction[];
}

export type ObjectiveStatusWithItems = ObjectiveStatus & Record<string, boolean>;

export interface DungeonClass {
    experience: number;
}
