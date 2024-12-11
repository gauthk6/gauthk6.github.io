# Data Cleaning and Exploratory Data Analysis

## Data Cleaning Process

Our initial dataset contained 1,534 power outage records with 20 columns. The cleaning process focused on three key areas: timestamp standardization, handling of missing/zero values, and feature engineering.

First, we standardized the temporal data by combining separate date and time columns (`OUTAGE.START.DATE`, `OUTAGE.START.TIME`, `OUTAGE.RESTORATION.DATE`, `OUTAGE.RESTORATION.TIME`) into unified datetime columns. The original data contained 9 null values in start times and 58 null values in restoration times, which were preserved as `NaT` (Not a Time) in the combined columns for transparency.

Next, we addressed data quality by converting zeros to `NaN` in critical measurement columns: outage duration, customers affected, and demand loss. This increased our missing value counts but provided a more accurate representation of the data, as true zero values in these fields were likely recording errors - a power outage would typically affect at least some customers and last for some duration.

Finally, we performed feature engineering by creating a composite urban metric. This combined three correlated urban indicators (urban population percentage, urban population density, and urban area percentage) into a single standardized score. The resulting URBAN column provides a more concise representation of an area's urbanization level, with higher values indicating more urbanized areas. The feature has 50 unique values corresponding to different states' urbanization levels.

After cleaning, our dataset maintained its 1,534 records but with a more focused set of 16 columns. Key missing value counts in the final dataset include:
- CUSTOMERS.AFFECTED: 655 missing values
- DEMAND.LOSS.MW: 901 missing values
- OUTAGE.DURATION: 136 missing values

<iframe src="head_md.md" width="800" height="600" frameborder="0"></iframe>


## Exploratory Data Analysis

### Distribution of Outage Durations
<div style="text-align: center">
   <iframe src="distribution_duration.html" width="800" height="600" frameborder="0"></iframe>
</div>

The histogram of outage durations reveals a highly right-skewed distribution, with the majority of outages being resolved within 20,000 minutes (approximately 2 weeks). However, there are notable outliers extending up to 100,000 minutes (about 69 days), suggesting that while most outages are resolved relatively quickly, some extreme cases require extended periods for restoration.

### Causes of Power Outages
<div style="text-align: center">
   <iframe src="distribution_causes.html" width="800" height="600" frameborder="0"></iframe>
</div>

The bar chart of outage causes shows that **severe weather** is by far the most common cause, accounting for nearly half of all recorded outages. This is followed by **intentional attacks** as the second most frequent cause, with other categories like system operability disruption, public appeal, and equipment failure occurring less frequently. Islanding and fuel supply emergencies are the least common causes in our dataset.

### Duration and Impact Analysis
<div style="text-align: center">
   <iframe src="distribution_impact.html" width="800" height="600" frameborder="0"></iframe>
</div>

The scatter plot of customers affected versus outage duration reveals several interesting patterns:
- Most outages cluster in the lower left corner, indicating that typical outages affect fewer than 500,000 customers and last less than 20,000 minutes
- Severe weather events (shown in blue) dominate the upper ranges of both duration and customer impact
- System operability disruptions (green) show high variation in customer impact but tend to have shorter durations
- Intentional attacks (red) generally affect fewer customers and have shorter durations compared to weather-related events

### Regional Patterns
<div style="text-align: center">
   <iframe src="regional_patterns.html" width="800" height="600" frameborder="0"></iframe>
</div>

The box plot of outage durations across climate regions shows substantial variation:
- All regions show significant outliers, particularly visible in the East North Central and West regions
- The West North Central region shows the most compact distribution, suggesting more consistent restoration times
- The Northeast and Southeast regions show similar median durations but different outlier patterns
- The Central region shows a higher median duration compared to other regions

### Regional Trends Over Time
<div style="text-align: center">
   <iframe src="pivot_table.md" width="800" height="400" frameborder="0"></iframe>
</div>

Looking at the relationship between outage duration and climate regions over time (shown in our pivot table), we observe varying patterns of restoration efficiency across different regions. The East North Central region, for example, shows a trend toward shorter outage durations in recent years, while the West region exhibits more variable restoration times. This regional variation could be attributed to differences in infrastructure resilience, local response capabilities, and the predominant types of outage causes in each region.

### Summary Statistics by Cause Category
The aggregated statistics reveal that while severe weather events had the highest average customer impact (190,972 customers), fuel supply emergencies had the longest average duration (13,484 minutes) but affected very few customers. System operability disruptions showed a notably high customer impact (211,066 on average) despite relatively short durations (747 minutes), suggesting efficient resolution protocols for these types of incidents.





## Assessment of Missingness 

In our power outage dataset, **DEMAND.LOSS.MW** (58.74% missing) exhibits strong characteristics of being **Not Missing at Random** (**NMAR**). We believe this missingness mechanism is **NMAR** because the likelihood of missing demand loss measurements could directly depend on the unobserved value itself - during catastrophic outages, measurement systems might fail precisely when the demand loss is extremely high, or conversely, very small power losses might go unrecorded due to being below measurement thresholds. To potentially convert this **NMAR** pattern to **MAR**, we would need additional data about each utility's measurement capabilities, including their minimum threshold for recording demand loss and whether their monitoring systems have backup power during outages. This technical metadata would likely explain much of the missingness pattern, making it **MAR** with respect to these new variables.

Our missingness analysis focused on exploring dependencies between the missingness of **ANOMALY.LEVEL** and other variables in the dataset, particularly **MONTH** and **CUSTOMERS.AFFECTED**. The permutation test results revealed a **significant dependency** between ANOMALY.LEVEL's missingness and MONTH (**p-value < 0.05**), indicating a **MAR** pattern. However, when testing against CUSTOMERS.AFFECTED, we found **no significant dependency** (**p-value = 0.3008**), despite an observed difference of -95,203.17 in means. This suggests that while there might be a practical relationship between customer impact and missing anomaly levels, it's not statistically significant enough to conclude MAR based on this variable alone.

<iframe src="missingness_distribution.html" width="100%" height="500" frameborder="0"></iframe>
<iframe src="missingness_permutation.html" width="100%" height="500" frameborder="0"></iframe>

The distribution plots from our analysis provide visual evidence of these relationships. Looking at the visualization above, we can see distinct differences in the distribution of **MONTH** values between cases where ANOMALY.LEVEL is missing versus not missing. The permutation test visualization shows the empirical distribution of test statistics, with our observed difference marked by the red line. This distribution helps us understand the significance of our findings - while the **MONTH** relationship shows clear separation between missing and non-missing cases, the **CUSTOMERS.AFFECTED** relationship exhibits more overlap, supporting our statistical conclusions about their respective dependencies.





# Statistical Analysis of Power Outage Patterns

## Hypothesis Test 1: Impact of Severe Weather on Outage Duration

For our first hypothesis test, we examined whether severe weather conditions lead to longer power outage durations compared to other causes. We formulated the following hypotheses:

- **Null Hypothesis (H₀)**: There is no difference in outage duration between severe weather and non-severe weather causes
- **Alternative Hypothesis (H₁)**: Severe weather causes lead to longer outage durations

We chose a permutation test with the difference in means as our test statistic, as it makes no assumptions about the underlying distribution of outage durations and is robust to outliers. Using 1,000 permutations and a significance level of α = 0.05, we obtained a p-value of 0.0000, with an observed difference in means of 2,399.86 minutes (approximately 40 hours). The extremely low p-value suggests strong evidence against the null hypothesis, indicating that outages caused by severe weather tend to last significantly longer than those caused by other factors. However, we should note that this does not prove causation, as there may be other confounding variables affecting outage duration.

## Hypothesis Test 2: Regional Variations in Customer Impact

Our second analysis investigated whether different climate regions experience varying levels of customer impact during power outages:

- **Null Hypothesis (H₀)**: There is no relationship between climate region and number of customers affected
- **Alternative Hypothesis (H₁)**: Different climate regions have different numbers of customers affected

We used a permutation test with the sum of squared deviations from the overall mean as our test statistic, which effectively captures the variation between regions. With 1,000 permutations and α = 0.05, we obtained a p-value of 0.0890. While this result doesn't meet the conventional threshold for statistical significance, it suggests a potential relationship between climate regions and the scale of customer impact. The South and West regions showed notably higher average numbers of affected customers, though we cannot conclusively state that climate region is the causal factor for these differences.


<iframe id="hypothesis-viz" src="hypothesis_test_viz.html" width="100%" height="600px" frameborder="0"></iframe>









# Fairness Analysis: Rural vs. Urban States

In our fairness analysis, we examined whether our power outage prediction model exhibited any systematic differences in performance between rural and urban states. States were classified as **urban** if they had a population density generally exceeding **200 people per square mile** (including states like New Jersey, Massachusetts, and California), while states with lower population densities were classified as **rural**. Our test utilized **Mean Absolute Error (MAE)** as the primary metric, which represents the average magnitude of prediction errors, with lower values indicating better model performance. We employed a **permutation test** with **100,000 permutations** to ensure high precision in our statistical assessment.

<div style="text-align: center">
   <iframe src="fairness_performance_comparison.html" width="800" height="600" frameborder="0"></iframe>
</div>

The results revealed an interesting pattern in our model's predictive performance. For rural states, the model achieved an **MAE of 202.92**, while for urban states, the MAE was substantially higher at **416.83**, resulting in an observed difference of **-213.90** (rural MAE minus urban MAE). This indicates that our model's predictions were, on average, more accurate for rural states than for urban states, with predictions deviating by about 214 fewer customers on average in rural states. The test included a robust sample size for both groups, with **118 samples** from rural states and **186 samples** from urban states, providing a reliable basis for comparison.

With our highly precise permutation test using 100,000 permutations, we obtained a **p-value of 0.0568**, which is slightly above the conventional significance threshold of 0.05. This means we **fail to reject** the null hypothesis that the model's performance is the same for rural and urban states. This result, with its high precision due to the large number of permutations, suggests that while there appears to be a substantial practical difference in the model's performance between rural and urban states, we cannot conclusively say this difference is systematic rather than due to chance. The fact that the p-value is very close to but not quite at the significance threshold indicates that this difference in performance warrants careful consideration in real-world applications, even if it doesn't meet the strict criteria for statistical significance.
