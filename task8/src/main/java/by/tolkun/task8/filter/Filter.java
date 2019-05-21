package by.tolkun.task8.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class Filter implements javax.servlet.Filter {
    @Override
    public void init(final FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(final ServletRequest servletRequest,
                         final ServletResponse servletResponse,
                         final FilterChain filterChain)
            throws IOException, ServletException {
        long start = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        long end = System.currentTimeMillis();
        String result = ((HttpServletRequest) servletRequest).getRequestURL()
                + " "
                + ((HttpServletRequest) servletRequest).getMethod()
                + " "
                + (end - start)
                + " ms";
        System.out.println("filter");
        servletResponse.getOutputStream().println(result);
    }

    @Override
    public void destroy() {

    }
}
