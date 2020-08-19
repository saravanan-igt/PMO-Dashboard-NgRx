import * as cjson from "compressed-json";
const currentYear = new Date().getFullYear();

export default class Utils {
  static calculateBudget(data, key) {
    let total = data.reduce((total, currentValue) => {
      return total + Number(currentValue[key]);
    }, 0);
    return Number(total.toFixed(2));
  }

  static calculateForecast(data, key1, key2) {
    let total = data.reduce((total, currentValue) => {
      return total + (Number(currentValue[key1]) + Number(currentValue[key2]));
    }, 0);
    return Number(total.toFixed(2));
  }

  static decompressResponse(response) {
    return cjson.decompress(response)[0];
  }

  static createLotteryData(response) {
    let data = [...cjson.decompress(response)].map((item) => {
      item.RAG = item.RAG === null ? "G" : item.RAG;
      return item;
    });
    let cData = data.filter(
      (item) =>
        item["BusinessTypeCode"] === "SD" || item["BusinessTypeCode"] === "SV"
    );

    let cActiveProjects = cData.filter(
      (item) => item["ProjectStatus"] === "Active"
    );

    let cPlannedProjects = cData.filter(
      (item) => item["ProjectStatus"] === "Planned"
    );
    let cClosedProjects = cData.filter(
      (item) => item["ProjectStatus"] === "Completed"
    );

    let cRagData = [...cActiveProjects];

    let sdActive = cActiveProjects.filter(
        (item) => item["BusinessTypeCode"] === "SD"
      ),
      sdPlanned = cPlannedProjects.filter(
        (item) => item["BusinessTypeCode"] === "SD"
      ),
      sdClosed = cClosedProjects.filter(
        (item) => item["BusinessTypeCode"] === "SD"
      ),
      svActive = cActiveProjects.filter(
        (item) => item["BusinessTypeCode"] === "SV"
      ),
      svPlanned = cPlannedProjects.filter(
        (item) => item["BusinessTypeCode"] === "SV"
      ),
      svClosed = cClosedProjects.filter(
        (item) => item["BusinessTypeCode"] === "SV"
      );

    let cTotalBudget =
      this.calculateBudget(cActiveProjects, "CostPlan") +
      this.calculateBudget(cPlannedProjects, "ForecastDollars") +
      this.calculateBudget(cClosedProjects, "ActualsToDate");

    //R & D
    let rData = data.filter((item) => item["BusinessTypeCode"] === "PD");
    // console.log("rData", rData);

    let rActiveProjects = rData.filter(
      (item) => item["ProjectStatus"] === "Active"
    );
    let rPlannedProjects = rData.filter(
      (item) => item["ProjectStatus"] === "Planned"
    );
    let rClosedProjects = rData.filter(
      (item) => item["ProjectStatus"] === "Completed"
    );

    let ragData = [...rActiveProjects];
    let totalBudget =
      this.calculateBudget(rActiveProjects, "AsNegotiatedBudget") +
      this.calculateBudget(rPlannedProjects, "ForecastDollars") +
      this.calculateBudget(
        rClosedProjects.filter((item) => item.Years === currentYear),
        "ActualsToDate"
      );
    return {
      customer: {
        projectList: {
          Active: cActiveProjects,
          Planned: cPlannedProjects,
          Completed: cClosedProjects,
        },
        sd: {
          active: sdActive.length,
          activeProjects: sdActive,
          planned: sdPlanned.length,
          plannedProjects: sdPlanned,
          closed: sdClosed.length,
          closedProjects: sdClosed,
          totalBudget:
            this.calculateBudget(sdActive, "CostPlan") +
            this.calculateBudget(sdPlanned, "ForecastDollars") +
            this.calculateBudget(
              sdClosed.filter((item) => item.Years === currentYear),
              "CostPlan"
            ),
          activeBudget: this.calculateBudget(sdActive, "CostPlan"),
          plannedBudget: this.calculateBudget(sdPlanned, "ForecastDollars"),
          closedBudget: this.calculateBudget(
            sdClosed.filter((item) => item.Years === currentYear),
            "CostPlan"
          ),
          activeBudgetF: this.calculateBudget(sdActive, "CostPlan"),
          closedBudgetF: this.calculateBudget(
            sdClosed.filter((item) => item.Years === currentYear),
            "CostPlan"
          ),
          activeForecast: this.calculateBudget(sdActive, "ForecastDollars"),
          closedForecast: this.calculateBudget(
            sdClosed.filter((item) => item.Years === currentYear),
            "ForecastDollars"
          ),
          red: sdActive.filter((item) => item.RAG === "R").length,
          green: sdActive.filter((item) => item.RAG === "G").length,
          amber: sdActive.filter((item) => item.RAG === "A").length,
        },
        sv: {
          active: svActive.length,
          activeProjects: svActive,
          planned: svPlanned.length,
          plannedProjects: svPlanned,
          closed: svClosed.length,
          closedProjects: svClosed,
          totalBudget:
            this.calculateBudget(svActive, "CostPlan") +
            this.calculateBudget(svPlanned, "ForecastDollars") +
            this.calculateBudget(
              svClosed.filter((item) => item.Years === currentYear),
              "ActualsToDate"
            ),
          activeBudget: this.calculateBudget(svActive, "CostPlan"),
          plannedBudget: this.calculateBudget(svPlanned, "ForecastDollars"),
          closedBudget: this.calculateBudget(
            svClosed.filter((item) => item.Years === currentYear),
            "CostPlan"
          ),
          activeBudgetF: this.calculateBudget(svActive, "CostPlan"),
          closedBudgetF: this.calculateBudget(
            svClosed.filter((item) => item.Years === currentYear),
            "CostPlan"
          ),
          activeForecast: this.calculateBudget(svActive, "ForecastDollars"),
          closedForecast: this.calculateBudget(
            svClosed.filter((item) => item.Years === currentYear),
            "ForecastDollars"
          ),
          red: svActive.filter((item) => item.RAG === "R").length,
          green: svActive.filter((item) => item.RAG === "G").length,
          amber: svActive.filter((item) => item.RAG === "A").length,
        },
        rag: {
          red: cRagData.filter((item) => item.RAG === "R").length,
          green: cRagData.filter((item) => item.RAG === "G").length,
          amber: cRagData.filter((item) => item.RAG === "A").length,
        },
        totalBudget: cTotalBudget,
        activeBudget: this.calculateBudget(cActiveProjects, "CostPlan"),
        plannedBudget: this.calculateBudget(
          cPlannedProjects,
          "ForecastDollars"
        ),
        closedBudget: this.calculateBudget(
          cClosedProjects.filter((item) => item.Years === currentYear),
          "CostPlan"
        ),
        activeBudgetF: this.calculateBudget(cActiveProjects, "CostPlan"),
        closedBudgetF: this.calculateBudget(
          cClosedProjects.filter((item) => item.Years === currentYear),
          "CostPlan"
        ),
        activeForecast: this.calculateBudget(
          cActiveProjects,
          "ForecastDollars"
        ),
        closedForecast: this.calculateBudget(
          cClosedProjects.filter((item) => item.Years === currentYear),
          "ForecastDollars"
        ),
      },
      ///R & D
      rnd: {
        projectList: {
          Active: rActiveProjects,
          Planned: rPlannedProjects,
          Completed: rClosedProjects,
        },
        totalBudget: totalBudget,
        rag: {
          red: ragData.filter((item) => item.RAG === "R").length,
          green: ragData.filter((item) => item.RAG === "G").length,
          amber: ragData.filter((item) => item.RAG === "A").length,
        },
        totalProjects: rData.length,
        activeBudget: this.calculateBudget(
          rActiveProjects,
          "AsNegotiatedBudget"
        ),
        plannedBudget: this.calculateBudget(
          rPlannedProjects,
          "ForecastDollars"
        ),
        closedBudget: this.calculateBudget(
          rClosedProjects.filter((item) => item.Years === currentYear),
          "ForecastDollars"
        ),
        activeBudgetF: this.calculateBudget(
          rActiveProjects,
          "AsNegotiatedBudget"
        ),
        closedBudgetF: this.calculateBudget(
          rClosedProjects.filter((item) => item.Years === currentYear),
          "AsNegotiatedBudget"
        ),
        activeForecast: this.calculateBudget(
          rActiveProjects,
          "ForecastDollars"
        ),
        closedForecast: this.calculateBudget(
          rClosedProjects.filter((item) => item.Years === currentYear),
          "ForecastDollars"
        ),
      },
    };
  }

  static createCasinoData(response) {
    let data = [...cjson.decompress(response)];
    let sdProjects = data.filter((item) => item.BUSINESS_TYPE === "SD");
    let rndProjects = data.filter((item) => item.BUSINESS_TYPE === "R&D");
    // sdProjects
    //   .filter((item) => item.Progress === "Active")
    //   .map((item) => {
    //     console.log("sdProjects BUDGET_COST", item.BUDGET_COST);
    //     console.log("sdProjects ACTUAL_COST", item.ACTUAL_COST);
    //   });

    return {
      sd: {
        projects: {
          total: sdProjects.length,
          active: sdProjects.filter((item) => item.Progress === "Active"),
          planned: sdProjects.filter((item) => item.Progress === "Planned"),
          closed: sdProjects.filter((item) => item.Progress === "Completed"),
        },
        budget: {
          total: this.calculateBudget(sdProjects, "ACTUAL_COST"),
          active: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          planned: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Planned"),
            "FORECAST_COST"
          ),
          closed: this.calculateBudget(
            sdProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "BUDGET_COST"
          ),
          activeForecast1: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast1: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Completed"),
            "FORECAST_COST"
          ),
          activeForecast: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast: this.calculateBudget(
            sdProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "FORECAST_COST"
          ),
        },
        rag: {
          red: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Red").length,
          amber: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Yellow").length,
          green: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Green").length,
        },
      },
      rnd: {
        projects: {
          total: rndProjects.length,
          active: rndProjects.filter((item) => item.Progress === "Active"),
          planned: rndProjects.filter((item) => item.Progress === "Planned"),
          closed: rndProjects.filter((item) => item.Progress === "Completed"),
        },
        budget: {
          total: this.calculateBudget(rndProjects, "ACTUAL_COST"),
          active: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          planned: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Planned"),
            "FORECAST_COST"
          ),
          closed: this.calculateBudget(
            rndProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "BUDGET_COST"
          ),
          activeForecast1: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          closedForecast1: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Completed"),
            "BUDGET_COST"
          ),
          activeForecast: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast: this.calculateBudget(
            rndProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "FORECAST_COST"
          ),
        },
        rag: {
          red: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Red").length,
          amber: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Yellow").length,
          green: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Green").length,
        },
      },
    };
  }

  static createVltData(response) {
    let data = [...cjson.decompress(response)];
    let sdProjects = data.filter((item) => item.BUSINESS_TYPE === "SD");
    let totalSdBudget =
      this.calculateBudget(
        sdProjects.filter((item) => item.Progress === "Active"),
        "ACTUAL_COST"
      ) +
      this.calculateBudget(
        sdProjects.filter((item) => item.Progress === "Planned"),
        "FORECAST_COST"
      ) +
      this.calculateBudget(
        sdProjects.filter((item) => item.Progress === "Completed"),
        "ACTUAL_COST"
      );
    let svProjects = data.filter((item) => item.BUSINESS_TYPE === "SV");
    let totalSvBudget =
      this.calculateBudget(
        svProjects.filter((item) => item.Progress === "Active"),
        "ACTUAL_COST"
      ) +
      this.calculateBudget(
        svProjects.filter((item) => item.Progress === "Planned"),
        "FORECAST_COST"
      ) +
      this.calculateBudget(
        svProjects.filter((item) => item.Progress === "Completed"),
        "ACTUAL_COST"
      );
    let rndProjects = data.filter(
      (item) => item.BUSINESS_TYPE === "R&D" && item.YEARS >= currentYear
    );

    let totalRndBudget =
      this.calculateBudget(
        rndProjects.filter((item) => item.Progress === "Active"),
        "ACTUAL_COST"
      ) +
      this.calculateBudget(
        rndProjects.filter((item) => item.Progress === "Planned"),
        "FORECAST_COST"
      ) +
      this.calculateBudget(
        rndProjects.filter((item) => item.Progress === "Completed"),
        "ACTUAL_COST"
      );
    return {
      sd: {
        projects: {
          total: sdProjects.length,
          active: sdProjects.filter((item) => item.Progress === "Active"),
          planned: sdProjects.filter((item) => item.Progress === "Planned"),
          closed: sdProjects.filter((item) => item.Progress === "Completed"),
        },
        budget: {
          total: totalSdBudget,
          active: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          planned: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Planned"),
            "FORECAST_COST"
          ),
          closed: this.calculateBudget(
            sdProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "BUDGET_COST"
          ),
          activeForecast: this.calculateBudget(
            sdProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast: this.calculateBudget(
            sdProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "FORECAST_COST"
          ),
        },
        rag: {
          red: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Red").length,
          amber: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Yellow").length,
          green: sdProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Green").length,
        },
      },
      sv: {
        projects: {
          total: svProjects.length,
          active: svProjects.filter((item) => item.Progress === "Active"),
          planned: svProjects.filter((item) => item.Progress === "Planned"),
          closed: svProjects.filter((item) => item.Progress === "Completed"),
        },
        budget: {
          total: totalSvBudget,
          active: this.calculateBudget(
            svProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          planned: this.calculateBudget(
            svProjects.filter((item) => item.Progress === "Planned"),
            "FORECAST_COST"
          ),
          closed: this.calculateBudget(
            svProjects.filter((item) => item.Progress === "Completed"),
            "BUDGET_COST"
          ),
          activeForecast: this.calculateBudget(
            svProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast: this.calculateBudget(
            svProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "FORECAST_COST"
          ),
        },
        rag: {
          red: svProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Red").length,
          amber: svProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Yellow").length,
          green: svProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Green").length,
        },
      },
      rnd: {
        projects: {
          total: rndProjects.length,
          active: rndProjects.filter((item) => item.Progress === "Active"),
          planned: rndProjects.filter((item) => item.Progress === "Planned"),
          closed: rndProjects.filter(
            (item) =>
              item.Progress === "Completed" && item.YEARS === currentYear
          ),
        },
        budget: {
          total: totalRndBudget,
          active: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Active"),
            "BUDGET_COST"
          ),
          planned: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Planned"),
            "FORECAST_COST"
          ),
          closed: this.calculateBudget(
            rndProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "BUDGET_COST"
          ),
          activeForecast: this.calculateBudget(
            rndProjects.filter((item) => item.Progress === "Active"),
            "FORECAST_COST"
          ),
          closedForecast: this.calculateBudget(
            rndProjects.filter(
              (item) =>
                item.Progress === "Completed" && item.YEARS === currentYear
            ),
            "FORECAST_COST"
          ),
        },
        rag: {
          red: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Red").length,
          amber: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Yellow").length,
          green: rndProjects
            .filter((item) => item.Progress === "Active")
            .filter((item) => item["OVERALL_RISK"] === "Green").length,
        },
      },
    };
  }
}
